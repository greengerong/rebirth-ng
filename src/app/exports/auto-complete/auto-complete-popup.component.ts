import { Component, Input, TemplateRef, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { RebirthUIConfig } from '../rebirth-ui.config';

@Component({
  selector: 're-auto-complete-popup',
  templateUrl: './auto-complete-popup.component.html',
  host: {
    '[class]': '"dropdown-menu "  +  (cssClass ? cssClass : "")',
    '[style.display]': 'isOpen && (source?.length || noResultItemTemplate) ? "inline-block" : "none"'
  },
  styleUrls: ['./auto-complete-popup.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => AutoCompletePopupComponent),
    multi: true
  }]
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

  private value: any;
  private onChange = (_: any) => null;
  private onTouched = () => null;

  constructor(private rebirthUIConfig: RebirthUIConfig) {
    this.formatter = rebirthUIConfig.autoComplete.formatter;
  }

  writeValue(obj: any): void {
    this.value = obj;
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
    this.onSelect(this.source[this.activeIndex]);
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
