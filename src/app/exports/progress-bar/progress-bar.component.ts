import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 're-progress-bar',
  templateUrl: './progress-bar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProgressBarComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }

}
