import { Component, Input, forwardRef, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { AutoCompleteDirective } from '../auto-complete';
import { RebirthNGConfig } from '../rebirth-ng.config';

@Component({
  selector: 're-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  exportAs: 'select',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectComponent),
    multi: true
  }]
})
export class SelectComponent implements ControlValueAccessor {
  @Input() readonly = true;
  @Input() disabled: boolean;
  @Input() placeholder: string;
  @Input() options: string[];
  @Input() iconDown: string;
  @Input() formatter: (obj: any) => string;

  @ViewChild(AutoCompleteDirective) autoComplete: AutoCompleteDirective;

  selectedItem: any;

  private onChange = (_: any) => null;
  private onTouched = () => null;

  constructor(rebirthNgConfig: RebirthNGConfig) {
    this.iconDown = rebirthNgConfig.select.iconDown;
    this.formatter = rebirthNgConfig.autoComplete.formatter;
  }

  writeValue(value: any): void {
    this.selectedItem = value;
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

  popup(event) {
    if (!this.disabled) {
      this.autoComplete.toggle(event)
    }
  }

  onSelectedChange(value: any) {
    this.onTouched();
    this.onChange(value);
  }
}
