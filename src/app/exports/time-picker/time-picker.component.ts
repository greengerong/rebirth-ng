import { ChangeDetectorRef, Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export interface TimePickerModel {
  hour: number;
  minute: number;
  second?: number;
}

enum TIME {
  HOUR,
  MINUTE,
  SECOND,
}

const TIME_KEY = {
  HOUR: 'hour',
  MINUTE: 'minute',
  SECOND: 'second',
};

const MAX_TIME_RANGE = {
  hour: 23,
  minute: 59,
  second: 59,
};

const supportKeyType = ['ArrowUp', 'ArrowDown'];

@Component({
  selector: 're-time-picker',
  styleUrls: ['./time-picker.component.scss'],
  templateUrl: './time-picker.component.html',
  exportAs: 'timePicker',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TimePickerComponent),
      multi: true
    }
  ]
})
export class TimePickerComponent implements OnInit, ControlValueAccessor {
  @Input() showSeconds = true;
  @Input() minTime: TimePickerModel = { hour: 0, minute: 0, second: 0 };
  @Input() maxTime: TimePickerModel = { hour: 23, minute: 59, second: 59 };

  hour = '00';
  minute = '00';
  second = '00';

  timeType = TIME;
  minDate: Date;
  maxDate: Date;

  disabled: boolean;
  private onChange = (_: TimePickerModel) => null;
  private onTouched = () => null;

  constructor(private changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.initConditionDate();
  }

  initConditionDate() {
    this.minDate = this.getDateByTime(this.minTime);
    this.maxDate = this.getDateByTime(this.maxTime);
  }

  getDateByTime(time: TimePickerModel) {
    return new Date((new Date()).setHours(time.hour || 0, time.minute || 0, time.second || 0));
  }

  getCurrentTimestamp(time): number {
    return (new Date()).setHours(time.hour || parseInt(this.hour), time.minute || parseInt(this.minute), time.second || parseInt(this.second));
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

  modifyTimeByKey(value: number, key: string, maxValue?: string, minValue?: string) {
    if (isNaN(value) || value < 0) {
      this[key] = minValue || this.fillLeft(this.minTime[key]);
    } else if (value > MAX_TIME_RANGE[key]) {
      this[key] = maxValue || this.fillLeft(this.maxTime[key]);
    } else if (this.getCurrentTimestamp({ [key]: value }) < this.minDate.getTime()) {
      this[key] = this.fillLeft(this.minTime[key]);
    } else if (this.getCurrentTimestamp({ [key]: value }) > this.maxDate.getTime()) {
      this[key] = this.fillLeft(this.maxTime[key]);
    } else {
      this[key] = this.fillLeft(value);
    }
  }

  onHoursChange() {
    this.onTouched();
    const hour = parseInt(this.hour);
    this.modifyTimeByKey(hour, TIME_KEY.HOUR);
    this.onModelChange();
  }

  onMinutesChange() {
    this.onTouched();
    const minute = parseInt(this.minute);
    this.modifyTimeByKey(minute, TIME_KEY.MINUTE, MAX_TIME_RANGE.minute.toString(), this.fillLeft(0));
    this.onModelChange();
  }

  onSecondsChange() {
    this.onTouched();
    const second = parseInt(this.second);
    this.modifyTimeByKey(second, TIME_KEY.SECOND, MAX_TIME_RANGE.second.toString(), this.fillLeft(0));

    this.onModelChange();
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

  isSafetyKeyPress(keyType: string, target: string) {
    return !(keyType === 'ArrowDown' && parseInt(target) === 0);
  }

  handleKeyEvent(event, type) {
    const keyEventType = event.code;
    if (supportKeyType.indexOf(keyEventType) === -1) {
      return;
    }
    let step = 1;
    if (keyEventType === 'ArrowDown') {
      step = -1;
    }
    this.modifyTimeByKeyPressEvent(type, keyEventType, step);
  }

  modifyTimeByKeyPress(key: string, type: string, step: number) {
    if (this.isSafetyKeyPress(type, this[key])) {
      this[key] = this.fillLeft(parseInt(this[key]) + step);
    }
  }

  modifyTimeByKeyPressEvent(type: number, keyEventType: string, step: number) {
    switch (type) {
      case this.timeType.HOUR:
        this.modifyTimeByKeyPress(TIME_KEY.HOUR, keyEventType, step);
        break;
      case this.timeType.MINUTE:
        this.modifyTimeByKeyPress(TIME_KEY.MINUTE, keyEventType, step);
        break;
      case this.timeType.SECOND:
        this.modifyTimeByKeyPress(TIME_KEY.SECOND, keyEventType, step);
        break;
    }
  }
}

