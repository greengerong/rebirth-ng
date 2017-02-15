import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverlayComponent } from './overlay.component';
import { ModalModule } from '../modal';

@NgModule({
  imports: [CommonModule, ModalModule],
  exports: [OverlayComponent],
  declarations: [OverlayComponent],
  providers: [],
  entryComponents: [OverlayComponent]
})
export class OverlayModule {
}
