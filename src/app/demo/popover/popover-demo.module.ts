import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PopoverDemoComponent } from './popover-demo.component';
import { RebirthUIModule } from '../../exports';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule, RebirthUIModule],
  exports: [PopoverDemoComponent],
  declarations: [PopoverDemoComponent],
  providers: [],
  entryComponents: [PopoverDemoComponent]
})
export class PopoverDemoModule {
}
