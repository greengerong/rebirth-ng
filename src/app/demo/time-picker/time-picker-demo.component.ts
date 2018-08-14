import { Component } from '@angular/core';
import { TimePickerModel } from 'rebirth-ng';

@Component({
  selector: 're-time-picker-demo',
  templateUrl: './time-picker-demo.component.html'
})
export class TimePickerDemoComponent {

  time1 = new TimePickerModel(13, 30, 30);
  time2 = new TimePickerModel(13, 30);
  time3 = new TimePickerModel(13, 30, 30);
  disabled: boolean;

  timeChange(time) {
    console.log('time change:', time, time.toString());
  }
}
