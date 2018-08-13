import { Component, Input, ViewChild, EventEmitter, Output, Renderer2 } from '@angular/core';
import { ModalOptions } from './modal-options.model';
import { ModalWindowComponent } from './modal-window.component';
import { DocumentRef } from '../window-ref';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 're-modal',
  templateUrl: './modal.component.html'
})
export class ModalComponent {
  static MODEL_OPEN_CSS = 'modal-open';
  @Input() isOpen = false;
  @Output() dismiss = new EventEmitter<any>();
  @Input() modalOptions: ModalOptions;
  @ViewChild(ModalWindowComponent) modalWindowComponent: ModalWindowComponent;
  instanceCount = 0;

  constructor(private renderer: Renderer2, private documentRef: DocumentRef) {

  }

  open() {
    this.modalWindowComponent.open();
    this.isOpen = true;
    this.toggleBodyClass(true);
  }

  close(): Observable<any> {
    return this.modalWindowComponent.close()
      .pipe(tap(_ => this.isOpen = false));
  }

  cleanup() {
    this.toggleBodyClass(false);
  }

  addContent<T>(options: ModalOptions, instanceCount: number): EventEmitter<T> {
    this.modalOptions = options;
    this.instanceCount = instanceCount;
    this.modalWindowComponent.addContent(options, this.dismiss);
    return this.dismiss;
  }

  private toggleBodyClass(isAdd: boolean): void {
    if (isAdd) {
      this.renderer.addClass(this.documentRef.body, ModalComponent.MODEL_OPEN_CSS);
      return;
    }

    this.renderer.removeClass(this.documentRef.body, ModalComponent.MODEL_OPEN_CSS);
  }

}
