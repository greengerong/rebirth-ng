import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 're-switch',
  templateUrl: './switch.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SwitchComponent implements OnInit {

  @Input() type: ButtonType;

  constructor() {
  }

  ngOnInit() {
  }

}
