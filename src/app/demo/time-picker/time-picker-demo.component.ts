import { Component } from '@angular/core';
import { TimePickerModel } from '../../exports';

@Component({
  selector: 're-time-picker-demo',
  templateUrl: './time-picker-demo.component.html'
})
export class TimePickerDemoComponent {

  time = new TimePickerModel(13, 30);
  disabled: boolean;

  timeChange(time) {
    console.log(time.toString());
  }
}
