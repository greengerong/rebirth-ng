import { Component, forwardRef, Input, OnInit, ChangeDetectorRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export interface TimePickerModel {
  hour: number;
  minute: number;
  second?: number;
}

@Component({
  selector: 're-time-picker',
  styleUrls: ['./time-picker.component.scss'],
  templateUrl: './time-picker.component.html',
  exportAs: 'timePicker',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TimePickerComponent),
    multi: true
  }]
})
export class TimePickerComponent implements OnInit, ControlValueAccessor {
  @Input() showSeconds = true;
  @Input() minTime: TimePickerModel = { hour: 0, minute: 0, second: 0 };
  @Input() maxTime: TimePickerModel = { hour: 23, minute: 59, second: 59 };

  hour = '00';
  minute = '00';
  second = '00';

  disabled: boolean;
  private onChange = (_: TimePickerModel) => null;
  private onTouched = () => null;

  constructor(private changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit(): void {

  }

  writeValue(value: TimePickerModel) {
    if (value) {
      this.hour = this.fillLeft(value.hour || 0);
      this.minute = this.fillLeft(value.minute || 0);
      this.second = this.fillLeft(value.second || 0);
      this.changeDetectorRef.markForCheck();
    }
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  setDisabledState(disabled) {
    this.disabled = disabled;
    this.changeDetectorRef.markForCheck();
  }

  private fillLeft(num: number) {
    return num < 10 ? `0${num}` : `${num}`;
  }

  onModelChange() {
    this.onChange(this.getTimePickerModel());
  }

  private getTimePickerModel() {
    const model: TimePickerModel = { hour: parseInt(this.hour), minute: parseInt(this.minute) };
    if (this.showSeconds) {
      model.second = parseInt(this.second);
    }
    return model;
  }

  onHoursChange() {
    this.onTouched();
    const hour = parseInt(this.hour);
    if (isNaN(hour) || hour < 0) {
      this.hour = '00';
    } else if (hour > 23) {
      this.hour = '23';
    }

    this.onModelChange();
  }

  onMinutesChange() {
    this.onTouched();
    const minute = parseInt(this.minute);
    if (isNaN(minute) || minute < 0) {
      this.minute = '00';
    } else if (minute > 59) {
      this.minute = '59';
    }

    this.onModelChange();
  }

  onSecondsChange() {
    this.onTouched();
    const second = parseInt(this.second);
    if (isNaN(second) || second < 0) {
      this.second = '00';
    } else if (second > 59) {
      this.second = '59';
    }

    this.onModelChange();
  }
}

