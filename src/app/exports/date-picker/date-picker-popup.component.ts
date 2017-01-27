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
  @Output() selectedDateChange = new EventEmitter<Date>();
  @Input() maxDate: Date;
  @Input() minDate: Date;
  year: number;
  month: number;
  dateConfig: any;
  displayWeeks: any[];
  years: number[];

  constructor() {
    this.dateConfig = {
      months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      min: 1900,
      max: 2099
    };

    this.minDate = new Date(this.dateConfig.min, 0, 1);
    this.maxDate = new Date(this.dateConfig.max, 11, 31);
  }

  ngOnInit() {
    const date = this.selectedDate || new Date();
    this.year = date.getFullYear();
    this.month = date.getMonth();
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

  onPreMonth() {
    if (this.month > 0) {
      this.month -= 1;
    } else {
      this.month = 11;
      this.year -= 1;
    }

    this.onDisplayWeeksChange();
  }

  onNextMonth() {
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
    this.years = new Array(maxYear - minYear).fill(0).map((value, index) => {
      return minYear + index;
    });
  }

  private onDisplayWeeksChange() {
    const firstDayOfMonth = new Date(this.year, this.month, 1);
    const weekOfDay = firstDayOfMonth.getDay();
    const startDate = new Date(firstDayOfMonth.getTime() - weekOfDay * DatePickerPopupComponent.DAY_DURATION);
    console.log(startDate.toLocaleString());
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
