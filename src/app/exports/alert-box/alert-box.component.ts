import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { RebirthNGConfig } from '../rebirth-ng.config';

@Component({
  selector: 're-alert-box',
  templateUrl: './alert-box.component.html',
  styleUrls: ['./alert-box.component.scss'],
  exportAs: 'alertBox',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlertBoxComponent {
  @Input() removeIcon: string;
  @Input() type: 'success' | 'info' | 'warning' | 'danger' = 'info';
  @Input() cssClass: string;
  @Input() closable: boolean;
  @Output() close = new EventEmitter<any>();

  constructor(rebirthNGConfig: RebirthNGConfig) {
    this.type = <any>rebirthNGConfig.alertBox.type;
    this.closable = rebirthNGConfig.alertBox.closable;
    this.removeIcon = rebirthNGConfig.alertBox.removeIcon;
  }

  closeBox() {
    this.onCloseBox();
  }

  private onCloseBox() {
    this.close.emit(this);
  }
}
