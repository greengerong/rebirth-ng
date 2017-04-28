import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 're-date-picker-demo',
  templateUrl: './date-picker-demo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatePickerDemoComponent implements OnInit {
  dateFormatOptions = ['YYYY-MM-DD HH:mm:ss', 'YY-MM-DD HH:mm:ss', 'MM/DD/YYYY HH:mm:ss', 'MM/DD/YY HH:mm:ss'];
  dateFormat: string;
  selectedDate1 = new Date('01/02/2017 09:11');
  selectedDate2: Date;
  selectedDate3 = new Date('01/02/2017 09:11');

  ngOnInit() {
    this.dateFormat = this.dateFormatOptions[0];
  }

}
