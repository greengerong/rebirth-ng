import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { RebirthNGConfig } from '../rebirth-ng.config';

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

  constructor(rebirthNGConfig: RebirthNGConfig) {
    this.type = <any>rebirthNGConfig.progressBar.type;
    this.animate = rebirthNGConfig.progressBar.animate;
    this.striped = rebirthNGConfig.progressBar.striped;
    this.max = rebirthNGConfig.progressBar.max;
  }
}
