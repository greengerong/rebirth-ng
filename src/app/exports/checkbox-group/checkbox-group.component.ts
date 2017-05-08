import { Component, ChangeDetectionStrategy, Input, ChangeDetectorRef, forwardRef } from '@angular/core';
import { RebirthNGConfig } from '../rebirth-ng.config';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 're-checkbox-group',
  templateUrl: './checkbox-group.component.html',
  styleUrls: ['./checkbox-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: 'checkboxGroup',
  host: { '[class]': 'cssClass' },
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CheckboxGroupComponent),
    multi: true
  }]
})
export class CheckboxGroupComponent implements ControlValueAccessor {
  @Input() disabled = false;
  @Input() options: any[];
  @Input() inline: boolean;
  @Input() cssClass: string;
  @Input() formatter: (item: any) => string;
  @Input() valueParser: (item: any) => any;
  value: any[] = [];
  private onChange = (_: any) => null;
  private onTouched = () => null;

  constructor(rebirthNGConfig: RebirthNGConfig, private changeDetectorRef: ChangeDetectorRef) {
    this.formatter = rebirthNGConfig.checkboxGroup.formatter;
    this.valueParser = rebirthNGConfig.checkboxGroup.valueParser;
  }

  writeValue(obj: any): void {
    this.value = obj instanceof Array ? obj : (obj ? [obj] : []);
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

  onCheckBoxChange(item: any, checkbox) {
    this.onTouched();
    this.value = this.value || [];
    const value = this.valueParser(item);
    if (checkbox.checked) {
      this.value = [...this.value, value];
    } else {
      this.value = this.value.filter((valueItem) => valueItem !== value);
    }
    this.onChange(this.value);
  }

  isChecked(item: any) {
    return this.value.indexOf(this.valueParser(item)) !== -1;
  }
}
