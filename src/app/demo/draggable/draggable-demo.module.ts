import { NgModule } from '@angular/core';

import { DraggableDemoComponent } from './draggable-demo.component';
import { RebirthNGModule } from 'rebirth-ng';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, RebirthNGModule],
  exports: [DraggableDemoComponent],
  declarations: [DraggableDemoComponent],
  providers: [],
  entryComponents: [DraggableDemoComponent]
})
export class DraggableDemoModule {
}
