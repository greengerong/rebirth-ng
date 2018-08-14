import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PopoverDemoComponent } from './popover-demo.component';
import { RebirthNGModule } from 'rebirth-ng';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule, RebirthNGModule],
  exports: [PopoverDemoComponent],
  declarations: [PopoverDemoComponent],
  providers: [],
  entryComponents: [PopoverDemoComponent]
})
export class PopoverDemoModule {
}
