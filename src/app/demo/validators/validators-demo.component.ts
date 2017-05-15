import { Component } from '@angular/core';

@Component({
  selector: 're-validators-demo',
  templateUrl: './validators-demo.component.html',
  styleUrls: ['./validators-demo.component.scss']
})
export class ValidatorsDemoComponent {
  model: any = {};
  date = Date.parse('2017-05-01');
  today = new Date().setHours(0, 0, 0, 0);
}
