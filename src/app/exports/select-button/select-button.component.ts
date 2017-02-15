import { Component, ChangeDetectionStrategy, forwardRef, Input, ChangeDetectorRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SelectButtonItem } from './select-button-item.model';

@Component({
  selector: 're-select-button',
  templateUrl: './select-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': '(cssClass || "") + " btn-group " + (size ? "btn-group-" + size : "") + (justified ? " btn-group-justified" : "") ',
    'role': 'group',
    'aria-label': 'Button group'
  },
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectButtonComponent),
    multi: true
  }]
})
export class SelectButtonComponent implements ControlValueAccessor {

  @Input() size: ButtonSize;
  @Input() type: ButtonType = 'primary';
  @Input() justified = false;
  @Input() multiple = false;
  @Input() items: SelectButtonItem;
  @Input() cssClass: string;
  disabled = false;
  value: any;
  private onChange = (_: any) => null;
  private onTouched = () => null;

  constructor(private changeDetectorRef: ChangeDetectorRef) {

  }

  writeValue(obj: any): void {
    this.value = obj;
    this.changeDetectorRef.markForCheck();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  isSelected(item: SelectButtonItem) {
    const itemValue = item.value || item.text;
    if (this.value) {
      return this.multiple ? this.value.indexOf(itemValue) !== -1 : this.value === itemValue;
    }
  }

  selectedItem(item: SelectButtonItem) {
    this.onTouched();
    const itemValue = item.value || item.text;
    if (this.multiple) {
      return this.fillMultipleValue(itemValue);
    }

    this.fillSingleValue(itemValue);
  }

  private fillSingleValue(itemValue: any|string) {
    if (this.value !== itemValue) {
      this.value = itemValue;
      this.onChange(this.value);
    }
  }

  private fillMultipleValue(itemValue: any|string) {
    const value = this.value || [];
    if (value.indexOf(itemValue) === -1) {
      this.value = [...value, itemValue];
    } else {
      this.value = value.filter(function (item) {
        return item !== itemValue;
      });
    }
    this.onChange(this.value);
  }
}
