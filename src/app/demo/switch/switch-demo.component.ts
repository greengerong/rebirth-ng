import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 're-switch-demo',
  templateUrl: './switch-demo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SwitchDemoComponent implements OnInit {
  checked = true;
  disabled = false;

  constructor() {
  }

  ngOnInit() {
  }

}
