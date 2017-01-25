import { NgModule } from '@angular/core';

import { TooltipDirective } from './tooltip.directive';
import { TooltipPopupComponent } from './tooltip-popup.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  exports: [TooltipDirective, TooltipPopupComponent],
  declarations: [TooltipDirective, TooltipPopupComponent],
  providers: [],
  entryComponents: [TooltipPopupComponent]
})
export class TooltipModule {
}
