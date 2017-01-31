import {
  Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter, OnChanges,
  SimpleChanges, HostListener
} from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 're-date-picker-popup',
  templateUrl: './date-picker-popup.component.html',
  styleUrls: ['./date-picker-popup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatePickerPopupComponent implements OnInit, OnChanges, ControlValueAccessor {
  static DAY_DURATION = 24 * 60 * 60 * 1000;
  @Input() selectedDate: Date;
  @Input() showTimePicker = false;
  @Output() selectedDateChange = new EventEmitter<Date>();
  @Input() maxDate: Date;
  @Input() minDate: Date;
  currentYear: number;
  currentMonth: number;
  currentHour: number;
  currentMinute: number;
  dateConfig: any;
  hourOptions: string[];
  minuteOptions: string[];
  displayWeeks: any[];
  yearOptions: number[];

  disabled = false;
  onChange = (_: any) => null;
  onTouched = () => null;

  constructor() {
    this.dateConfig = {
      weeks: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
      months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      min: 2016,
      max: 2017
    };

    this.minDate = new Date(this.dateConfig.min, 11, 30);
    this.maxDate = new Date(this.dateConfig.max, 2, 31);
  }

  ngOnInit() {
    this.hourOptions = new Array(24).fill(0).map((value, index) => this.fillLeft(index));
    this.minuteOptions = new Array(60).fill(0).map((value, index) => this.fillLeft(index));

    let date = this.selectedDate || new Date();
    if (date.getTime() < this.minDate.getTime()) {
      date = this.minDate;
    }
    if (date.getTime() > this.maxDate.getTime()) {
      date = this.maxDate;
    }
    this.currentYear = date.getFullYear();
    this.currentMonth = date.getMonth();
    this.currentHour = this.showTimePicker ? date.getHours() : 0;
    this.currentMinute = this.showTimePicker ? date.getMinutes() : 0;
    this.onDisplayWeeksChange();
    this.onYearRangeChange();
  }

  writeValue(obj: any): void {
    this.selectedDate = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onSelectDate(date) {
    if (this.isDisabledDay(date)) {
      return;
    }
    const selectedDate = new Date(date.getFullYear(), date.getMonth(), date.getDate(),
      this.currentHour, this.currentMinute);
    // this.selectedDateChange.emit(this.selectedDate);
    this.onTouched();
    this.writeValue(selectedDate);
    this.onChange(selectedDate);
    if (this.currentMonth !== this.selectedDate.getMonth() || this.currentYear !== this.selectedDate.getFullYear()) {
      this.currentYear = this.selectedDate.getFullYear();
      this.currentMonth = this.selectedDate.getMonth();
      this.onDisplayWeeksChange();
    }
  }

  onTimeChange() {
    this.selectedDate = new Date(this.selectedDate.getFullYear(), this.selectedDate.getMonth(),
      this.selectedDate.getDate(), this.currentHour, this.currentMinute);

    this.onTouched();
    this.writeValue(this.selectedDate);
    this.onChange(this.selectedDate);
    // this.selectedDateChange.emit(this.selectedDate);
  }

  hasPreMonth() {
    return this.currentMonth > 0 || this.currentYear > this.minDate.getFullYear();
  }

  onPreMonth() {
    if (!this.hasPreMonth()) {
      return;
    }

    if (this.currentMonth > 0) {
      this.currentMonth -= 1;
    } else {
      this.currentMonth = 11;
      this.currentYear -= 1;
    }

    this.onDisplayWeeksChange();
  }


  hasNextMonth() {
    return this.currentMonth < 11 || this.currentYear < this.maxDate.getFullYear();
  }

  onNextMonth() {
    if (!this.hasNextMonth()) {
      return;
    }

    if (this.currentMonth < 11) {
      this.currentMonth += 1;
    } else {
      this.currentMonth = 0;
      this.currentYear += 1;
    }

    this.onDisplayWeeksChange();
  }

  isDisabledDay(date) {
    return date.getTime() < this.minDate.getTime() ||
      date.getTime() > this.maxDate.getTime();
  }

  isSelectDay(date) {
    if (!this.selectedDate || !date) {
      return false;
    }
    return date.getFullYear() === this.selectedDate.getFullYear() &&
      date.getMonth() === this.selectedDate.getMonth() &&
      date.getDate() === this.selectedDate.getDate();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (['minDate', 'maxDate'].some(key => !!changes[key])) {
      this.onYearRangeChange();
    }
  }

  onYearRangeChange() {
    const minYear = this.minDate.getFullYear();
    const maxYear = this.maxDate.getFullYear();
    this.yearOptions = new Array(maxYear - minYear + 1).fill(0).map((value, index) => {
      return minYear + index;
    });
  }

  @HostListener('click', ['$event'])
  onDocumentClick($event: Event) {
    $event.stopPropagation();
  }

  private fillLeft(num: number) {
    return num < 10 ? `0${num}` : `${num}`;
  }

  private onDisplayWeeksChange() {
    const firstDayOfMonth = new Date(this.currentYear, this.currentMonth, 1);
    const weekOfDay = firstDayOfMonth.getDay();
    const startDate = new Date(firstDayOfMonth.getTime() - weekOfDay * DatePickerPopupComponent.DAY_DURATION);
    const displayWeeks = [];
    for (let i = 0; i < 6; i++) {
      const startWeekDate = startDate.getTime() + i * 7 * DatePickerPopupComponent.DAY_DURATION;
      const weekDays = new Array(7).fill(0).map((value, index) => {
        const currentDate = new Date(startWeekDate + index * DatePickerPopupComponent.DAY_DURATION);
        return {
          day: this.fillLeft(currentDate.getDate()),
          date: currentDate,
          inMonth: currentDate.getMonth().toString() === this.currentMonth.toString()
        };
      });
      displayWeeks.push(weekDays);
    }
    this.displayWeeks = displayWeeks;
  }

}
