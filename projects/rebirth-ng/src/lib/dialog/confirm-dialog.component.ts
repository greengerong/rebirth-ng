import { Component, EventEmitter } from '@angular/core';
import { DialogOptions } from './dialog-options.model';
import { RebirthNGConfig } from '../rebirth-ng.config';
import { Modal } from '../modal/modal.model';
import { ModalDismissReasons } from '../modal/modal-dismiss-reasons.model';

@Component({
  selector: 're-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./dialog.scss']
})
export class ConfirmDialogComponent implements Modal {
  context: DialogOptions;
  dismiss: EventEmitter<any>;
  btnYes: string;
  btnNo: string;
  btnYesType: string;
  btnNoType: string;

  constructor(private rebirthNGConfig: RebirthNGConfig) {
    this.btnYes = rebirthNGConfig.dialog.button.yes;
    this.btnYesType = rebirthNGConfig.dialog.button.btnYesType;
    this.btnNo = rebirthNGConfig.dialog.button.no;
    this.btnNoType = rebirthNGConfig.dialog.button.btnNoType;
  }

  yes() {
    this.dismiss.emit(ModalDismissReasons.YES);
  }

  no() {
    this.dismiss.error(ModalDismissReasons.NO);
  }

}
