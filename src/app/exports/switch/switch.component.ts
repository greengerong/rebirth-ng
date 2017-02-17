import { Component, Input, ChangeDetectionStrategy, forwardRef, ChangeDetectorRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { RebirthUIConfig } from '../rebirth-ui.config';

@Component({
  selector: 're-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SwitchComponent),
    multi: true
  }]
})
export class SwitchComponent implements ControlValueAccessor {
  @Input() type: ButtonType;
  @Input() size: ButtonSize;
  @Input() disabled: boolean;
  @Input() onText: string;
  @Input() offText: string;
  checked: boolean;
  private onChange = (_: any) => null;
  private onTouched = () => null;

  constructor(private rebirthUIConfig: RebirthUIConfig, private changeDetectorRef: ChangeDetectorRef) {
    this.onText = rebirthUIConfig.switchBtn.onText;
    this.offText = rebirthUIConfig.switchBtn.offText;
    this.type = <any>rebirthUIConfig.switchBtn.type;
  }

  toggle() {
    if (this.disabled) {
      return;
    }
    this.onTouched();
    this.checked = !this.checked;
    this.onChange(this.checked);
  }

  writeValue(obj: any): void {
    this.checked = obj;
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

}
