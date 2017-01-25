import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PopoverDemoComponent } from './popover-demo.component';
import { RebirthUIModule } from '../../exports';

@NgModule({
  imports: [CommonModule, RebirthUIModule],
  exports: [PopoverDemoComponent],
  declarations: [PopoverDemoComponent],
  providers: [],
})
export class PopoverDemoModule {
}
