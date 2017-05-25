import { NgModule } from '@angular/core';

import { ModalComponent } from './modal.component';
import { CommonModule } from '@angular/common';
import { ModalContentComponent } from './modal-content.component';
import { ModalBackdropComponent } from './modal-backdrop.component';
import { ModalWindowComponent } from './modal-window.component';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { ModalService } from './modal.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ModalBackdropComponent],
  declarations: [
    ModalComponent,
    ModalContentComponent,
    ModalBackdropComponent,
    ModalWindowComponent
  ],
  entryComponents: [
    ModalContentComponent,
    ModalComponent,
    ModalBackdropComponent
  ]
})
export class ModalModule {
  constructor(router: Router, modalService: ModalService) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        modalService.closeAll();
      }
    })
  }
}
