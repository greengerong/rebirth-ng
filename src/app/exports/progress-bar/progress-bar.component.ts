import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 're-progress-bar',
  templateUrl: './progress-bar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProgressBarComponent implements OnInit {
  @Input() type = '';
  @Input() text: string;
  @Input() max = 100;
  @Input() value: number = 45;
  @Input() animate = false;
  @Input() striped = false;

  constructor() {
  }

  ngOnInit() {
  }

}
