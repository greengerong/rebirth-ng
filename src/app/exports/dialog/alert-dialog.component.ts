import { Component, OnInit, EventEmitter } from '@angular/core';
import { Modal } from '../modal';
import { ModalDismissReasons } from '../modal/modal-dismiss-reasons.model';
import { DialogOptions } from './dialog-options.model';

@Component({
  moduleId: module.id,
  selector: 're-alert-dialog',
  templateUrl: './alert-dialog.component.html'
})
export class AlertDialogComponent implements Modal {
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
