import { Component } from '@angular/core';
import { TimePickerModel } from '../../exports';

@Component({
  selector: 're-time-picker-demo',
  templateUrl: './time-picker-demo.component.html'
})
export class TimePickerDemoComponent {

  time: TimePickerModel = { hour: 13, minute: 30 };

  constructor() {
  }
}
