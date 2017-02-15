import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverlayDemoComponent } from './overlay-demo.component';

@NgModule({
  imports: [CommonModule],
  exports: [OverlayDemoComponent],
  declarations: [OverlayDemoComponent],
  providers: [],
  entryComponents: [OverlayDemoComponent]
})
export class OverlayDemoModule {
}
