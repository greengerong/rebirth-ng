import {
  ComponentFactoryResolver, ComponentRef, Directive, ElementRef, forwardRef, HostListener, Injector, Input, OnInit,
  Renderer,
  ViewContainerRef
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { PositionService } from '../position/positioning.service';
import { DatePickerPopupComponent } from './date-picker-popup.component';
import { DatePipe } from '@angular/common';

export const RE_DATE_PICKER_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DatePickerDirective),
  multi: true
};

@Directive({
  selector: '[reDatePicker]',
  exportAs: 'datePicker',
  providers: [RE_DATE_PICKER_VALUE_ACCESSOR]
})
export class DatePickerDirective implements OnInit, ControlValueAccessor {
  @Input() placement: 'top' | 'bottom' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' = 'bottom-left';
  @Input() selectedDate: Date;
  @Input() locale = 'en-US';
  @Input() dateFormat: string;
  @Input() showTimePicker = false;
  @Input() maxDate: Date | string | number;
  @Input() minDate: Date| string | number;
  @Input() cssClass: string;
  isOpen = false;
  dateConfig: any;
  private datePipe: DatePipe;
  private cmpRef: ComponentRef<DatePickerPopupComponent>;
  private onChange = (_: any) => null;
  private onTouched = () => null;

  constructor(private elementRef: ElementRef, private viewContainerRef: ViewContainerRef,
              private componentFactoryResolver: ComponentFactoryResolver, private renderer: Renderer,
              private injector: Injector, private positionService: PositionService) {
    this.dateConfig = {
      weeks: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
      months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      min: 2016,
      max: 2017,
      format: {
        date: 'yyyy-MM-dd',
        time: 'yyyy-MM-dd HH:mm'
      }
    };
  }

  ngOnInit() {
    this.datePipe = new DatePipe(this.locale);
    const factory = this.componentFactoryResolver.resolveComponentFactory(DatePickerPopupComponent);
    this.cmpRef = this.viewContainerRef.createComponent(factory, this.viewContainerRef.length, this.injector);
    this.applyPopupStyling(this.cmpRef.location.nativeElement);
    const component = this.cmpRef.instance;
    this.hide();
    component.writeValue(this.selectedDate);
    this.fillPopupData();
    component.ngOnInit();

    component.registerOnChange((selectedDate) => {
      this.writeValue(selectedDate);
      this.onChange(selectedDate);
      this.hide();
    });
  }

  writeValue(obj: any): void {
    this.selectedDate = !obj || obj instanceof Date ? obj : new Date(obj);
    this.writeModelValue(obj);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.renderer.setElementProperty(this.elementRef.nativeElement, 'disabled', isDisabled);
    if (this.isOpen) {
      this.cmpRef.instance.setDisabledState(isDisabled);
    }
  }

  toggle($event: Event) {
    if ($event) {
      $event.stopPropagation();
    }
    if (this.isOpen) {
      this.hide();
      return;
    }

    this.show();
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick($event: Event) {
    const hostElement = this.elementRef.nativeElement;
    if ($event.target !== hostElement) {
      this.hide();
    }
  }

  show() {
    const component = this.cmpRef.instance;
    component.writeValue(this.selectedDate);
    this.fillPopupData();
    this.isOpen = true;
    const targetElement = this.cmpRef.location.nativeElement;
    const hostElement = this.elementRef.nativeElement;
    this.renderer.setElementStyle(targetElement, 'display', 'inline-block');
    const clientRect = this.positionService.positionElements(hostElement, targetElement, this.placement, false);
    this.renderer.setElementStyle(targetElement, 'left', `${clientRect.left}px`);
    this.renderer.setElementStyle(targetElement, 'top', `${clientRect.top}px`);
  }

  hide() {
    this.isOpen = false;
    const target = this.cmpRef.location.nativeElement;
    this.renderer.setElementStyle(target, 'display', 'none');
  }

  @HostListener('blur', ['$event'])
  onBlur() {
    this.onTouched();
  }

  @HostListener('keyup.esc', ['$event'])
  onEscKeyup() {
    this.hide();
  }

  private writeModelValue(selectDate: Date) {
    const value = selectDate ? this.datePipe.transform(selectDate, this.dateFormat || this.getDefaultDateFormat()) : '';
    this.renderer.setElementProperty(this.elementRef.nativeElement, 'value', value);
    if (this.isOpen) {
      this.cmpRef.instance.writeValue(selectDate);
      this.onTouched();
    }
  }

  private getDefaultDateFormat() {
    return this.showTimePicker ? this.dateConfig.format.time : this.dateConfig.format.date;
  }

  private applyPopupStyling(nativeElement: any) {
    this.renderer.setElementClass(nativeElement, 'dropdown-menu', true);
    this.renderer.setElementStyle(nativeElement, 'padding', '0');
  }

  private fillPopupData() {
    ['showTimePicker', 'maxDate', 'minDate', 'cssClass'].forEach(key => {
      if (this[key] !== undefined) {
        this.cmpRef.instance[key] = this[key];
      }
    });
  }
}
