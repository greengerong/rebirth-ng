import { Component, OnInit, Input } from '@angular/core';
import { AlertBoxModel } from './alert-box.model';
import { RebirthNGConfig } from '../rebirth-ng.config';

@Component({
  selector: 're-alert-box-panel',
  templateUrl: './alert-box-panel.component.html',
  styleUrls: ['./alert-box-panel.component.scss'],
  host: {
    '[style.width]': 'width',
    '[class]': '(placement ? "alert-" + placement : "") + " " + (cssClass || "")',
  }
})
export class AlertBoxPanelComponent {
  @Input() alerts: AlertBoxModel[] = [];
  @Input() width: string;
  @Input() cssClass: string;
  @Input() placement: 'top' | 'top-right' | 'bottom' | 'bottom-right';

  constructor(private rebirthNGConfig: RebirthNGConfig) {
    this.placement = <any>rebirthNGConfig.alertBoxPanel.placement;
    this.cssClass = <any>rebirthNGConfig.alertBoxPanel.cssClass;
  }

  close(item) {
    this.alerts = this.alerts.filter((box) => box !== item);
  }
}
