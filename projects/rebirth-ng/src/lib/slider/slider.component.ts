import {
  Component,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  forwardRef,
  AfterViewInit,
  ViewChild,
  ElementRef,
  OnDestroy,
  OnInit,
  Input,
  Output,
  EventEmitter,
  HostListener
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { Subject, fromEvent } from 'rxjs';
import { switchMap, take, takeUntil } from 'rxjs/operators';
import { RebirthNGConfig } from '../rebirth-ng.config';
import { DocumentRef } from '../window-ref/document-ref.service';
import { WindowRef } from '../window-ref/window-ref.service';

@Component({
  selector: 're-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: 'slider',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SliderComponent),
      multi: true
    }
  ]
})
export class SliderComponent implements AfterViewInit, OnInit, OnDestroy, ControlValueAccessor {
  @ViewChild('sliderDot') dot: ElementRef;
  @ViewChild('slider') slider: ElementRef;
  @Output() onChange: EventEmitter<number> = new EventEmitter<number>();

  handleOffset = 0;

  @Input() max;
  @Input() min;
  private offset: number;
  private stepWidth: number;

  value = 0;

  private complete$ = new Subject<void>();

  private onValueChange = (_: any) => null;
  private onTouched = () => null;

  constructor(private changeDetectorRef: ChangeDetectorRef,
              private rebirthNGConfig: RebirthNGConfig,
              private documentRef: DocumentRef,
              private windowRef: WindowRef) {
    this.max = rebirthNGConfig.slider.max;
    this.min = rebirthNGConfig.slider.min;
  }

  ngOnInit() {
    this.offset = this.max - this.min;
  }

  ngOnDestroy() {
    this.complete$.complete();
  }

  ngAfterViewInit() {
    this.stepWidth = this.windowRef.getOffsetWidth(this.slider) / this.offset;

    const mousedown$ = fromEvent(this.dot.nativeElement, 'mousedown');
    const mousemove$ = fromEvent(this.documentRef.document, 'mousemove');
    const mouseup$ = fromEvent(this.documentRef.document, 'mouseup');

    mousedown$
      .pipe(
        switchMap(() => {
          this.onTouched();
          return mousemove$.pipe(takeUntil(mouseup$));
        }),
        takeUntil(this.complete$)
      )
      .subscribe((event: MouseEvent) => {
        event.preventDefault();
        this.calcValueWhenMove(event);
        this.changeDetectorRef.markForCheck();
      });

    mousedown$
      .pipe(
        switchMap(() => {
          this.onTouched();
          return mouseup$.pipe(take(1));
        }),
        takeUntil(this.complete$)
      )
      .subscribe((event: MouseEvent) => {
        event.preventDefault();
        this.calcValueWhenMove(event);

        this.calcHandleOffset();
        this.changeDetectorRef.markForCheck();
      });
  }

  @HostListener('window:resize')
  onResize() {
    this.stepWidth = this.windowRef.getOffsetWidth(this.slider) / this.offset;
    this.calcHandleOffset();
  }

  public onSliderClick(event) {
    this.calcValueWhenMove(event);
  }

  public onOperateValue(value: number): void {
    this.onTouched();
    this.operateValue(value);
  }

  public operateValue(value: number): void {
    this.changeValue(value);
    this.calcHandleOffset();
  }

  private calcHandleOffset(): void {
    this.handleOffset = this.value * this.stepWidth;
  }

  private calcValueWhenMove(event: MouseEvent): void {
    const rect = this.windowRef.getBoundingClientRect(this.slider)// IE >= 9
    const mouseRelativeSliderOffsetX = event.clientX - rect.left;
    const fixedOffsetX = Math.max(Math.min(mouseRelativeSliderOffsetX, rect.width), 0);

    this.handleOffset = fixedOffsetX;

    this.changeValue(Math.round(fixedOffsetX / this.stepWidth));
  }

  private changeValue(newValue): void {
    const fixedValue = Math.max(Math.min(newValue, this.max), 0);
    if (fixedValue === this.value) {
      return;
    }
    this.value = fixedValue;
    const outSideValue = fixedValue + this.min;
    this.onValueChange(outSideValue);
    this.onChange.emit(outSideValue);
  }

  writeValue(value: number) {
    const sideValue = value ? value - this.min : this.min;
    this.operateValue(sideValue);
    this.changeDetectorRef.markForCheck();
  }

  registerOnChange(fn: any) {
    this.onValueChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }
}
