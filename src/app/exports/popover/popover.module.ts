import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PopoverDirective } from './popover.directive';
import { PopoverPopupComponent } from './popover-popup.component';

@NgModule({
  imports: [CommonModule],
  exports: [PopoverDirective],
  declarations: [PopoverDirective, PopoverPopupComponent],
  providers: [],
  entryComponents: [PopoverPopupComponent]
})
export class PopoverModule {
}
