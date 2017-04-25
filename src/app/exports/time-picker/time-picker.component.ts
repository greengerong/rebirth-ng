import { Component, forwardRef, Input, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export const TIME_PICKER_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TimePickerComponent),
  multi: true
};

@Component({
  selector: 're-time-picker',
  styleUrls: ['time-picker.style.scss'],
  templateUrl: 'time-picker.template.html',
  providers: [TIME_PICKER_CONTROL_VALUE_ACCESSOR]
})
export class TimePickerComponent implements OnInit, ControlValueAccessor {
  @Input() minDate;
  @Input() initialDate;

  _hours;
  _minutes;
  onChange = Function.prototype;
  time = new Date();
  conditionTime: { maxHours?: number, maxMinutes?: number, minHours?: number, minMinutes?: number } = { minHours: 0 };
  isCorrectHours = true;
  isCorrectMinutes = true;

  constructor() {
  }

  get hours() {
    return this._hours;
  }

  set hours(hours) {
    this._hours = hours;
    this.time.setHours(parseInt(hours, 10));
    this.onChange(this.time);
  }

  get minutes() {
    return this._minutes;
  }

  set minutes(minutes) {
    this._minutes = minutes;
    this.time.setMinutes(parseInt(minutes, 10));
    this.onChange(this.time);
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
      const initialTime = new Date(this.initialDate);
      this.hours = this.padTime(initialTime.getHours());
      this.minutes = this.padTime(initialTime.getMinutes());
    } else {
      const currentTime = new Date();
      this.hours = this.padTime(currentTime.getHours());
      this.minutes = this.padTime(currentTime.getMinutes());
    }
  }

  writeValue(value: Date) {
    if (value && value instanceof Date) {
      this.time = new Date(value.getTime());
    }
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched() {
  }

  setDisabledState() {
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

