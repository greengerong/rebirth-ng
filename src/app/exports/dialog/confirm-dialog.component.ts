import { Component, EventEmitter } from '@angular/core';
import { Modal, ModalDismissReasons } from '../modal';
import { DialogOptions } from './dialog-options.model';
import { RebirthNGConfig } from '../rebirth-ng.config';

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

  constructor(private rebirthNGConfig: RebirthNGConfig) {
    this.btnYes = rebirthNGConfig.dialog.button.yes;
    this.btnNo = rebirthNGConfig.dialog.button.no;
  }

  yes() {
    this.dismiss.emit(ModalDismissReasons.YES);
  }

  no() {
    this.dismiss.error(ModalDismissReasons.NO);
  }

}
