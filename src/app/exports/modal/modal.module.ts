import { NgModule } from '@angular/core';

import { ModalComponent } from './modal.component';
import { CommonModule } from '@angular/common';
import { ModalContentComponent } from './modal-content.component';
import { ModalBackdropComponent } from './modal-backdrop.component';
import { ModalWindowComponent } from './modal-window.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [],
  declarations: [
    ModalComponent,
    ModalContentComponent,
    ModalBackdropComponent,
    ModalWindowComponent
  ],
  entryComponents: [
    ModalContentComponent,
    ModalComponent
  ]
})
export class ModalModule {
}
