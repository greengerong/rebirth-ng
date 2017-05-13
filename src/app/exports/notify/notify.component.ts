import { Component, Input } from '@angular/core';
import { NotifyModel } from './notify.model';
import { RebirthNGConfig } from '../rebirth-ng.config';

@Component({
  selector: 're-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.scss'],
  host: {
    '[style.width]': 'width',
    '[class]': '(placement ? "alert-" + placement : "") + " " + (cssClass || "")',
  }
})
export class NotifyComponent {
  @Input() notifies: NotifyModel[] = [];
  @Input() width: string;
  @Input() cssClass: string;
  @Input() placement: 'top' | 'top-right' | 'bottom' | 'bottom-right';

  constructor(private rebirthNGConfig: RebirthNGConfig) {
    this.placement = <any>rebirthNGConfig.alertBoxPanel.placement;
    this.cssClass = rebirthNGConfig.alertBoxPanel.cssClass;
    this.width = rebirthNGConfig.alertBoxPanel.width;
  }

  close(item) {
    this.notifies = this.notifies.filter((box) => box !== item);
  }
}
