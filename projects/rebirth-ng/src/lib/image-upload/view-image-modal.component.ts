import { Component, EventEmitter } from '@angular/core';
import { Modal } from '../modal/modal.model';

@Component({
  selector: './re-view-image-modal',
  styleUrls: ['./view-image-modal.component.scss'],
  templateUrl: './view-image-modal.component.html'
})

export class ViewImageModalComponent implements Modal {
  context: any;
  dismiss: EventEmitter<any>;

  close() {
    this.dismiss.next(null);
  }
}
