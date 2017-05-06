import { Component, Input, TemplateRef, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { RebirthNGConfig } from '../rebirth-ng.config';
import { trigger, state, style, animate, transition, AnimationEvent } from '@angular/animations';


@Component({
  selector: 're-auto-complete-popup',
  templateUrl: './auto-complete-popup.component.html',
  host: {
    '[class]': '"dropdown-menu "  +  (cssClass ? cssClass : "")',
    '[style.display]': 'isOpen && (source?.length || noResultItemTemplate) ? "inline-block" : "none"',
    '[@state]': 'animateState',
    '(@state.done)': 'afterVisibilityAnimation($event)'
  },
  styleUrls: ['./auto-complete-popup.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => AutoCompletePopupComponent),
    multi: true
  }],
  animations: [
    trigger('state', [
      state('void', style({ transform: 'scale(0)' })),
      state('initial', style({ transform: 'scale(0)' })),
      state('visible', style({ transform: 'scale(1)' })),
      state('hidden', style({ transform: 'scale(0)' })),
      transition('* => visible', animate('150ms cubic-bezier(0.0, 0.0, 0.2, 1)')),
      transition('* => hidden', animate('150ms cubic-bezier(0.4, 0.0, 1, 1)')),
    ])
  ]
})
export class AutoCompletePopupComponent implements ControlValueAccessor {
  activeIndex = 0;
  @Input() cssClass: string;
  @Input() disabled: boolean;
  @Input() source: any[];
  @Input() isOpen: boolean;
  @Input() term: string;
  @Input() itemTemplate: TemplateRef<any>;
  @Input() noResultItemTemplate: TemplateRef<any>;
  @Input() formatter: (item: any) => string;
  animateState = 'initial';

  private value: any;
  private onChange = (_: any) => null;
  private onTouched = () => null;

  constructor(private rebirthUIConfig: RebirthNGConfig) {
    this.formatter = rebirthUIConfig.autoComplete.formatter;
  }

  writeValue(obj: any): void {
    this.value = obj;
  }

  show() {
    if (!this.isOpen) {
      this.isOpen = true;
      this.animateState = 'visible';
    }
  }

  hide() {
    if (this.isOpen) {
      this.animateState = 'hidden';
    }
  }

  afterVisibilityAnimation(e: AnimationEvent) {
    if (e.toState === 'hidden' && this.isOpen) {
      this.isOpen = false;
    }
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onSelect(item: any) {
    this.value = item;
    this.onTouched();
    this.onChange(this.value);
  }

  selectCurrentItem() {
    if (this.source && this.source.length) {
      this.onSelect(this.source[this.activeIndex]);
    }
  }

  onActiveIndexChange(index) {
    this.activeIndex = index;
  }

  reset() {
    this.activeIndex = 0;
  }

  next() {
    if (this.isOpen && this.source && this.source.length) {
      if (this.activeIndex === this.source.length - 1) {
        this.activeIndex = 0;
        return;
      }
      this.activeIndex = this.activeIndex + 1;
    }
  }

  prev() {
    if (this.isOpen && this.source && this.source.length) {
      if (this.activeIndex === 0) {
        this.activeIndex = this.source.length - 1;
        return;
      }
      this.activeIndex = this.activeIndex - 1;
    }
  }
}
