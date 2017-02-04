import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { RebirthUIConfig } from '../rebirth-ui.config';

@Component({
  selector: 're-alert-box',
  templateUrl: 'alert-box.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlertBoxComponent {
  @Input() type: 'success' | 'info' | 'warning' | 'danger';
  @Input() closable: boolean;
  @Output() close = new EventEmitter<any>();

  constructor(private rebirthUIConfig: RebirthUIConfig) {
    this.type = <any>rebirthUIConfig.alertBox.type;
    this.closable = rebirthUIConfig.alertBox.closable;
  }

  @Input()
  set disappearTime(time) {
    if (time) {
      setTimeout(() => this.onCloseBox(), time);
    }
  }

  closeBox() {
    this.onCloseBox();
  }

  private onCloseBox() {
    this.close.emit(this);
  }
}
