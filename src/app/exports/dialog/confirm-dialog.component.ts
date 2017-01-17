import { Component, EventEmitter } from '@angular/core';
import { Modal, ModalDismissReasons } from '../modal';
import { DialogOptions } from './dialog-options.model';

@Component({
  moduleId: module.id,
  selector: 're-confirm-dialog',
  templateUrl: './confirm-dialog.component.html'
})
export class ConfirmDialogComponent implements Modal {
  context: DialogOptions;
  dismiss: EventEmitter<any>;

  constructor() {

  }

  yes() {
    this.dismiss.emit(ModalDismissReasons.YES);
  }

  no() {
    this.dismiss.error(ModalDismissReasons.NO);
  }

}
