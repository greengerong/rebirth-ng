import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { RebirthNGConfig } from '../rebirth-ng.config';

@Component({
  selector: 're-ellipsis',
  templateUrl: './ellipsis.component.html',
  styleUrls: ['./ellipsis.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: 'ellipsis'
})
export class EllipsisComponent {
  length: number;
  fullText = '';
  ellipsisText = '';
  @Input() placement: 'top' | 'bottom' | 'left' | 'right';

  constructor(rebirthNGConfig: RebirthNGConfig) {
    this.length = rebirthNGConfig.ellipsis.length;
    this.placement = <any>rebirthNGConfig.ellipsis.placement;
  }

  @Input()
  set max(length: number) {
    this.length = length;
    this.ellipsis();
  }

  @Input()
  set text(text: string) {
    this.fullText = text || '';
    this.ellipsis();
  }

  private ellipsis() {
    this.ellipsisText = this.fullText.length > this.length ? this.fullText.substr(0, this.length) : '';
  }
}
