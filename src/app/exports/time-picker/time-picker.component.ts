import { Component, forwardRef, Input, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export const TIME_PICKER_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TimePickerComponent),
  multi: true
};

interface Time {
  hours: string;
  minutes: string;
  seconds: string;
}

@Component({
  selector: 're-time-picker',
  styleUrls: ['time-picker.style.scss'],
  templateUrl: 'time-picker.template.html',
  providers: [TIME_PICKER_CONTROL_VALUE_ACCESSOR]
})
export class TimePickerComponent implements OnInit, ControlValueAccessor {
  @Input() minDate;
  @Input() initialDate;

  time: Time = { hours: '00', minutes: '00', seconds: '00' };
  conditionTime: { maxHours?: number, maxMinutes?: number, minHours?: number, minMinutes?: number } = { minHours: 0 };
  isCorrectHours = true;
  isCorrectMinutes = true;
  disabled: boolean;
  private onChange = (_: any) => null;
  private onTouched = () => null;

  constructor() {
  }

  get hours() {
    return this.time.hours;
  }

  set hours(hours) {
    this.time.hours = hours;
    this.onChange(this.time);
  }

  get minutes() {
    return this.time.minutes;
  }

  set minutes(minutes) {
    this.time.minutes = minutes;
    this.onChange(this.time);
  }

  get seconds() {
    return this.time.seconds;
  }

  set seconds(seconds) {
    this.time.seconds = seconds;
    this.onChange(seconds);
  }

  ngOnInit() {
    if (this.minDate) {
      if (!_.isDate(this.minDate)) {
        this.minDate = new Date(parseInt(this.minDate, 10));
      }

      this.conditionTime.minHours = this.minDate.getHours();
      this.conditionTime.minMinutes = this.minDate.getMinutes();
    }

    if (this.initialDate) {
      const initialTime = this.initialDate;
      this.hours = this.padTime(initialTime.hours);
      this.minutes = this.padTime(initialTime.minutes);
      this.seconds = this.padTime(initialTime.seconds);
    }
  }

  writeValue(value: Time) {
    if (_.isObject(value)) {
      this.time.hours = value.hours;
      this.time.minutes = value.minutes;
      this.time.seconds = value.seconds;
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
  }

  inputBoxBlur() {
    this.onTouched();
  }

  padTime(value) {
    return _.padStart(value, 2, '0');
  }

  onHoursChange(value) {
    this.isCorrectHours = true;
    if (!_.isEmpty(this.conditionTime)) {
      if (this.conditionTime.minHours > parseInt(value, 10)) {
        this.isCorrectHours = false;
      }

      if (this.conditionTime.minHours >= parseInt(value, 10) &&
        this.conditionTime.minMinutes >= parseInt(this.minutes, 10)) {
        this.isCorrectMinutes = false;
      }

      if (this.conditionTime.minHours < parseInt(value, 10)) {
        this.isCorrectMinutes = true;
      }
    }
    this.hours = this.padTime(value);
  }

  onMinutesChange(value) {
    this.isCorrectMinutes = true;
    if (!_.isEmpty(this.conditionTime)) {
      if (this.conditionTime.minHours >= parseInt(this.hours, 10) &&
        this.conditionTime.minMinutes > parseInt(value, 10)) {
        this.isCorrectMinutes = false;
      }
    }
    this.minutes = this.padTime(value);
  }
}

