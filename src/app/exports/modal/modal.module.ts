import { NgModule } from '@angular/core';

import { ModalComponent } from './modal.component';
import { CommonModule } from '@angular/common';
import { ModalContentComponent } from './modal-content.component';
import { ModalBackdropComponent } from './modal.backdrop.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [],
  declarations: [
    ModalComponent,
    ModalContentComponent,
    ModalBackdropComponent
  ],
  entryComponents: [
    ModalContentComponent,
    ModalComponent,
    ModalBackdropComponent
  ]
})
export class ModalModule {
}
