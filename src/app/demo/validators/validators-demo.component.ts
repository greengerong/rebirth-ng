import { Component } from '@angular/core';

@Component({
  selector: 're-validators-demo',
  templateUrl: './validators-demo.component.html',
  styleUrls: ['./validators-demo.component.scss']
})
export class ValidatorsDemoComponent {
  model: any = {};
  now = Date.now();
}
