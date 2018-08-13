import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverlayComponent } from './overlay.component';
import { OverlayContentComponent } from './overlay-content.component';
import { ModalModule } from '../modal';

@NgModule({
  imports: [CommonModule, ModalModule],
  exports: [OverlayComponent],
  declarations: [OverlayComponent, OverlayContentComponent],
  providers: [],
  entryComponents: [OverlayComponent]
})
export class OverlayModule {
}
