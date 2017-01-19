import { Component, OnInit } from '@angular/core';

@Component({
  selector: 're-alert-box-demo',
  templateUrl: './alert-box-demo.component.html'
})
export class AlertBoxDemoComponent implements OnInit {
  closed = false;
  autoDisappear = false;

  constructor() {
  }

  ngOnInit() {
  }

  close() {
    console.log('close');
    this.closed = true;
  }
}
