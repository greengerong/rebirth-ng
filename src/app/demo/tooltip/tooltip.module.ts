import { NgModule } from '@angular/core';

import { TooltipDemoComponent } from './tooltip-demo.component';
import { CommonModule } from '@angular/common';
import { RebirthNGModule } from '../../exports';

@NgModule({
  imports: [CommonModule, RebirthNGModule],
  exports: [TooltipDemoComponent],
  declarations: [TooltipDemoComponent],
  providers: [],
  entryComponents: [TooltipDemoComponent]
})
export class TooltipDemoModule {
}
