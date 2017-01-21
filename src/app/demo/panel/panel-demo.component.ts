import { Component, OnInit } from '@angular/core';

@Component({
  selector: 're-panel-demo',
  templateUrl: './panel-demo.component.html'
})
export class PanelDemoComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }

  close(type) {
    console.log(`Panel ${type} closing!`);
  }
}
