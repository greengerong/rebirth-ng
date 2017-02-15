import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverlayDemoComponent, OverlayBodyDemoComponent } from './overlay-demo.component';

@NgModule({
  imports: [CommonModule],
  exports: [OverlayDemoComponent],
  declarations: [OverlayDemoComponent, OverlayBodyDemoComponent],
  providers: [],
  entryComponents: [OverlayDemoComponent, OverlayBodyDemoComponent]
})
export class OverlayDemoModule {
}
