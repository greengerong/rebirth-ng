import { Component, EventEmitter } from '@angular/core';
import { Modal, ModalDismissReasons } from '../modal';
import { DialogOptions } from './dialog-options.model';
import { RebirthNGConfig } from '../rebirth-ng.config';

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
