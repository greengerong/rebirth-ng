import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 're-date-picker-demo',
  templateUrl: './date-picker-demo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatePickerDemoComponent implements OnInit {
  dateFormatOptions = ['YYYY-MM-DD HH:mm', 'YY-MM-DD HH:mm', 'MM/DD/YYYY HH:mm', 'MM/DD/YY HH:mm'];
  dateFormat: string;
  selectedDate1 = new Date('01/02/2017 09:11');
  selectedDate2: Date;
  selectedDate3 = new Date('01/02/2017 09:11');

  ngOnInit() {
    this.dateFormat = this.dateFormatOptions[0];
  }

}
