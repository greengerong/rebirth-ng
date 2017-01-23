import { Component, OnInit } from '@angular/core';

@Component({
  selector: 're-tooltip-demo',
  templateUrl: './tooltip-demo.component.html'
})
export class TooltipDemoComponent implements OnInit {
  setting: { name: 'rebirth tooltip', placement: 'top', trigger: 'hover' };

  constructor() {
  }

  ngOnInit() {
  }
}
