import {
  Component, ChangeDetectionStrategy, Input, ChangeDetectorRef, forwardRef, Output,
  EventEmitter
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 're-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: 'checkbox',
  host: { '[class]': '(cssClass ? cssClass : "") + " checkbox"' },
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CheckboxComponent),
    multi: true
  }]
})
export class CheckboxComponent implements ControlValueAccessor {
  @Input() disabled = false;
  @Input() cssClass: string;
  @Input() label: string;
  @Input() checkedValue: any = true;
  @Input() unCheckedValue: any = false;
  @Output() valueChange = new EventEmitter<any>();
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

  onCheckBoxChange(checkbox) {
    this.onTouched();
    if (checkbox.checked) {
      this.value = this.checkedValue;
    } else {
      this.value = this.unCheckedValue;
    }
    this.onChange(this.value);
    this.valueChange.emit(this.value);
  }

  isChecked() {
    return this.value === this.checkedValue;
  }
}
