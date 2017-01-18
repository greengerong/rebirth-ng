import { Component, Input, ViewChild, EventEmitter, Output, ChangeDetectionStrategy, Renderer } from '@angular/core';
import { ModalOptions } from './modal-options.model';
import { ModalWindowComponent } from './modal-window.component';

@Component({
  selector: 're-modal',
  templateUrl: './modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalComponent {
  @Input() isOpen: boolean = false;
  @Output() dismiss = new EventEmitter<any>();
  @Input() modalOptions: ModalOptions;
  @ViewChild(ModalWindowComponent) modalWindowComponent: ModalWindowComponent;
  instanceCount = 0;

  constructor(private renderer: Renderer) {

  }

  open() {
    this.isOpen = true;
    this.modalWindowComponent.isOpen = true;
    this.renderer.setElementClass(document.body, 'modal-open', true);
  }

  close() {
    this.isOpen = false;
  }

  cleanup() {
    this.renderer.setElementClass(document.body, 'modal-open', false);
  }

  addContent<T>(options: ModalOptions, instanceCount: number): EventEmitter<T> {
    this.modalOptions = options;
    this.instanceCount = instanceCount;
    this.modalWindowComponent.addContent(options, this.dismiss);
    return this.dismiss;
  }

}
