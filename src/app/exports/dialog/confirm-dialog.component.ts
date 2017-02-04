import { Component, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Modal, ModalDismissReasons } from '../modal';
import { DialogOptions } from './dialog-options.model';
import { RebirthUIConfig } from '../rebirth-ui.config';

@Component({
  selector: 're-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfirmDialogComponent implements Modal {
  context: DialogOptions;
  dismiss: EventEmitter<any>;
  btnYes: string;
  btnNo: string;

  constructor(private rebirthUIConfig: RebirthUIConfig) {
    this.btnYes = rebirthUIConfig.dialog.button.yes;
    this.btnNo = rebirthUIConfig.dialog.button.no;
  }

  yes() {
    this.dismiss.emit(ModalDismissReasons.YES);
  }

  no() {
    this.dismiss.error(ModalDismissReasons.NO);
  }

}
