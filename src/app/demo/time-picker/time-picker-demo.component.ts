import { Component } from '@angular/core';

@Component({
  selector: 're-time-picker-demo',
  templateUrl: './time-picker-demo.component.html'
})
export class TimePickerDemoComponent {

  date = new Date();

  minDate;

  constructor() {
    this.minDate = this.date.setHours(this.date.getHours() - 1);
  }
}
