import { NgModule } from '@angular/core';

import { TooltipDemoComponent } from './tooltip-demo.component';
import { CommonModule } from '@angular/common';
import { RebirthUIModule } from '../../exports/rebirth-ui.module';

@NgModule({
  imports: [CommonModule, RebirthUIModule],
  exports: [TooltipDemoComponent],
  declarations: [TooltipDemoComponent],
  providers: [],
})
export class TooltipDemoModule {
}
