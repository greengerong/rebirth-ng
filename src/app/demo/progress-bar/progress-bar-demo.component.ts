import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 're-progress-bar-demo',
  templateUrl: './progress-bar-demo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProgressBarDemoComponent implements OnInit {
  value = 45;

  constructor() {
  }

  ngOnInit() {
  }

}
