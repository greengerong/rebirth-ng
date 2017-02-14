import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { RebirthUIConfig } from '../rebirth-ui.config';

@Component({
  selector: 're-progress-bar',
  templateUrl: './progress-bar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProgressBarComponent {
  @Input() type = '';
  @Input() text: string;
  @Input() max: number;
  @Input() animate: boolean;
  @Input() striped: boolean;
  @Input() value: number;
  @Input() cssClass: string;

  constructor(private rebirthUIConfig: RebirthUIConfig) {
    this.type = rebirthUIConfig.progressBar.type;
    this.animate = rebirthUIConfig.progressBar.animate;
    this.striped = rebirthUIConfig.progressBar.striped;
    this.max = rebirthUIConfig.progressBar.max;
  }
}
