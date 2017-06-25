import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { RebirthNGConfig } from '../rebirth-ng.config';

@Component({
  selector: 're-alert-box',
  templateUrl: './alert-box.component.html',
  exportAs: 'alertBox',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlertBoxComponent {
  @Input() type: 'success' | 'info' | 'warning' | 'danger' = 'info';
  @Input() cssClass: string;
  @Input() closable: boolean;
  @Output() close = new EventEmitter<any>();

  constructor(rebirthNGConfig: RebirthNGConfig) {
    this.type = <any>rebirthNGConfig.alertBox.type;
    this.closable = rebirthNGConfig.alertBox.closable;
  }

  closeBox() {
    this.onCloseBox();
  }

  private onCloseBox() {
    this.close.emit(this);
  }
}
