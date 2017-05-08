import { Component, ChangeDetectionStrategy, forwardRef, Input, ChangeDetectorRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { RebirthNGConfig } from '../rebirth-ng.config';

@Component({
  selector: 're-radio-group',
  templateUrl: './radio-group.component.html',
  styleUrls: ['./radio-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '[class]': 'cssClass' },
  exportAs: 'radioGroup',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => RadioGroupComponent),
    multi: true
  }]
})
export class RadioGroupComponent implements ControlValueAccessor {
  static NAME_SEED = 0;
  @Input() disabled = false;
  @Input() options: any[];
  @Input() inline: boolean;
  @Input() cssClass: string;
  @Input() formatter: (item: any) => string;
  @Input() valueParser: (item: any) => any;
  name: string;
  value: any;
  private onChange = (_: any) => null;
  private onTouched = () => null;

  constructor(rebirthNGConfig: RebirthNGConfig, private changeDetectorRef: ChangeDetectorRef) {
    this.formatter = rebirthNGConfig.radioGroup.formatter;
    this.valueParser = rebirthNGConfig.radioGroup.valueParser;
    this.name = `rebirth-radio-group-${RadioGroupComponent.NAME_SEED++}`;
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

  onRadioChange(item: any) {
    this.onTouched();
    this.value = this.valueParser(item);
    this.onChange(this.value);
  }

  isChecked(item: any) {
    return this.value === this.valueParser(item);
  }
}
