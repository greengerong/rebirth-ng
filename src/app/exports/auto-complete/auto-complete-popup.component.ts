import { Component, OnInit, ChangeDetectionStrategy, Input, TemplateRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 're-auto-complete-popup',
  templateUrl: './auto-complete-popup.component.html',
  host: { '[class.dropdown-menu]': 'true', '[style.display]': 'isOpen ? "inline-block" : "none"' },
  styles: [
      `.dropdown-item {
      display: block;
      width: 100%;
      padding: 8px 1rem;
      clear: both;
      white-space: nowrap;
      border: 0;
    }`
  ]
})
export class AutoCompletePopupComponent implements ControlValueAccessor {
  activeIndex = 0;
  @Input() disabled: boolean;
  @Input() source: any[];
  @Input() isOpen: boolean;
  @Input() term: string;
  @Input() itemTemplate: TemplateRef<any>;
  @Input() formatter: (item: any) => string = item => item ? (item.label || item.toString()) : '';
  private value: any;
  private onChange = (_: any) => null;
  private onTouched = () => null;

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
