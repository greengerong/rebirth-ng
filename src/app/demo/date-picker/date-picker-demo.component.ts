import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 're-date-picker-demo',
  templateUrl: './date-picker-demo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatePickerDemoComponent implements OnInit {
  dateFormatOptions = ['yyyy-MM-dd HH:mm', 'yy-MM-dd HH:mm', 'MM/dd/yyyy HH:mm', 'MM/dd/yy HH:mm'];
  dateFormat: string;
  selectedDate: Date;

  constructor() {
  }

  ngOnInit() {
    this.dateFormat = this.dateFormatOptions[0];
  }

}
