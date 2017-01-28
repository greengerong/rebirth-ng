import {
  Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter, OnChanges,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 're-date-picker-popup',
  templateUrl: './date-picker-popup.component.html',
  styleUrls: ['./date-picker-popup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatePickerPopupComponent implements OnInit, OnChanges {
  private static DAY_DURATION = 24 * 60 * 60 * 1000;
  @Input() selectedDate: Date;
  @Input() showTimePicker = false;
  @Output() selectedDateChange = new EventEmitter<Date>();
  @Input() maxDate: Date;
  @Input() minDate: Date;
  year: number;
  month: number;
  hour: number;
  minute: number;
  dateConfig: any;
  hours: number[];
  minutes: number[];
  displayWeeks: any[];
  years: number[];

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
    this.hours = new Array(24).fill(0).map((value, index) => index);
    this.minutes = new Array(60).fill(0).map((value, index) => index);

    let date = this.selectedDate || new Date();
    if (date.getTime() < this.minDate.getTime()) {
      date = this.minDate;
    }
    if (date.getTime() > this.maxDate.getTime()) {
      date = this.maxDate;
    }
    this.year = date.getFullYear();
    this.month = date.getMonth();
    this.hour = date.getHours();
    this.minute = date.getMinutes();
    this.onDisplayWeeksChange();
    this.onYearRangeChange();
  }

  onSelectDate(date) {
    if (this.isDisabledDay(date)) {
      return;
    }
    this.selectedDate = new Date(date);
    this.selectedDateChange.emit(date);
    if (this.month !== this.selectedDate.getMonth() || this.year !== this.selectedDate.getFullYear()) {
      this.year = this.selectedDate.getFullYear();
      this.month = this.selectedDate.getMonth();
      this.onDisplayWeeksChange();
    }
  }

  hasPreMonth() {
    return this.month > 0 || this.year > this.minDate.getFullYear();
  }

  onPreMonth() {
    if (!this.hasPreMonth()) {
      return;
    }

    if (this.month > 0) {
      this.month -= 1;
    } else {
      this.month = 11;
      this.year -= 1;
    }

    this.onDisplayWeeksChange();
  }


  hasNextMonth() {
    return this.month < 11 || this.year < this.maxDate.getFullYear();
  }

  onNextMonth() {
    if (!this.hasNextMonth()) {
      return;
    }

    if (this.month < 11) {
      this.month += 1;
    } else {
      this.month = 0;
      this.year += 1;
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
    this.years = new Array(maxYear - minYear + 1).fill(0).map((value, index) => {
      return minYear + index;
    });
  }

  private onDisplayWeeksChange() {
    const firstDayOfMonth = new Date(this.year, this.month, 1);
    const weekOfDay = firstDayOfMonth.getDay();
    const startDate = new Date(firstDayOfMonth.getTime() - weekOfDay * DatePickerPopupComponent.DAY_DURATION);
    const displayWeeks = [];
    for (let i = 0; i < 6; i++) {
      const startWeekDate = startDate.getTime() + i * 7 * DatePickerPopupComponent.DAY_DURATION;
      const weekDays = new Array(7).fill(0).map((value, index) => {
        const currentDate = new Date(startWeekDate + index * DatePickerPopupComponent.DAY_DURATION);
        return {
          day: currentDate.getDate(),
          date: currentDate,
          inMonth: currentDate.getMonth().toString() === this.month.toString()
        };
      });
      displayWeeks.push(weekDays);
    }
    this.displayWeeks = displayWeeks;
  }

}
