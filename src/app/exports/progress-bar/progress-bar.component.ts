import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { RebirthUIConfig } from '../rebirth-ui.config';

@Component({
  selector: 're-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProgressBarComponent {
  @Input() type: '' | 'success' | 'info' | 'warning' | 'danger' = '';
  @Input() text: string;
  @Input() thin: boolean;
  @Input() max: number;
  @Input() animate: boolean;
  @Input() striped: boolean;
  @Input() value: number;
  @Input() cssClass: string;

  constructor(private rebirthUIConfig: RebirthUIConfig) {
    this.type = <any>rebirthUIConfig.progressBar.type;
    this.animate = rebirthUIConfig.progressBar.animate;
    this.striped = rebirthUIConfig.progressBar.striped;
    this.max = rebirthUIConfig.progressBar.max;
  }
}
