import { Component, EventEmitter } from '@angular/core';
import { Modal } from '../modal/modal.model';
import { DialogOptions } from './dialog-options.model';
import { RebirthNGConfig } from '../rebirth-ng.config';
import { ModalDismissReasons } from '../modal/modal-dismiss-reasons.model';

@Component({
  selector: 're-alert-dialog',
  templateUrl: './alert-dialog.component.html',
  styleUrls: ['./dialog.scss'],
})
export class AlertDialogComponent implements Modal {
  context: DialogOptions;
  dismiss: EventEmitter<any>;
  btnYes: string;
  btnYesType: string;

  constructor(private rebirthNGConfig: RebirthNGConfig) {
    this.btnYes = rebirthNGConfig.dialog.button.yes;
    this.btnYesType = rebirthNGConfig.dialog.button.btnYesType;
  }

  yes() {
    this.dismiss.emit(ModalDismissReasons.YES);
  }

  no() {
    this.dismiss.error(ModalDismissReasons.NO);
  }
}
