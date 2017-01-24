import { NgModule } from '@angular/core';

import { TooltipDirective } from './tooltip.directive';
import { TooltipPopupComponent } from './tooltip-popup.component';
import { CommonModule } from '@angular/common';
import { TooltipContentDirective } from './tooltip-content.directive';

@NgModule({
  imports: [CommonModule],
  exports: [TooltipDirective, TooltipPopupComponent, TooltipContentDirective],
  declarations: [TooltipDirective, TooltipPopupComponent, TooltipContentDirective],
  providers: [],
  entryComponents: [TooltipPopupComponent]
})
export class TooltipModule {
}
