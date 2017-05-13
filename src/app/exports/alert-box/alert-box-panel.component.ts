import { Component, OnInit, Input } from '@angular/core';
import { AlertBoxModel } from './alert-box.model';

@Component({
  selector: 're-alert-box-panel',
  templateUrl: './alert-box-panel.component.html',
  styleUrls: ['./alert-box-panel.component.scss'],
  host: {
    '[style.width]': 'width',
    '[class]': '(type ? "alert-" + type : "") ',
  }
})
export class AlertBoxPanelComponent implements OnInit {
  @Input() alerts: AlertBoxModel[];
  @Input() width: string;
  @Input() type: 'top' | 'top-right' | 'bottom' | 'bottom-right' = 'top';

  constructor() {
  }

  ngOnInit() {
  }

  close(item) {
    this.alerts = this.alerts.filter((box) => box !== item);
  }
}
