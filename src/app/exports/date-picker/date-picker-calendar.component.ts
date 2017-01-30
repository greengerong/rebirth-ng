import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { DateFormat } from './date-format.model';
import { DatePickerPopupComponent } from './date-picker-popup.component';

@Component({
  selector: 're-date-picker-calendar',
  templateUrl: './date-picker-calendar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatePickerCalendarComponent implements OnInit {
  @Input() showTimePicker = false;
  @Output() selectedDateChange = new EventEmitter<string>();
  @Input() maxDate: string;
  @Input() minDate: string;
  @Input() formater: DateFormat;
  @Input() pattern: string;

  @ViewChild(DatePickerPopupComponent) datePickerPopup: DatePickerPopupComponent;

  constructor() {
  }

  ngOnInit() {
  }

}
