import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DatePickerDirective } from '../../exports/date-picker/date-picker.directive';

@Component({
  selector: 're-date-picker-demo',
  templateUrl: './date-picker-demo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatePickerDemoComponent implements OnInit {
  dateFormatOptions = ['yyyy-MM-dd HH:mm', 'yy-MM-dd HH:mm', 'MM/dd/yyyy HH:mm', 'MM/dd/yy HH:mm'];
  dateFormat: string;
  selectedDate1: Date;
  selectedDate2: Date;
  selectedDate3 = new Date('01/02/2017 09:11');

  ngOnInit() {
    this.dateFormat = this.dateFormatOptions[0];
  }

}
