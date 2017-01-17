import { Component, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Modal, ModalDismissReasons } from '../modal';
import { DialogOptions } from './dialog-options.model';

@Component({
  selector: 're-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
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
