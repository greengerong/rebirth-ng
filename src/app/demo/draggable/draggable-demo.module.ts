import { NgModule } from '@angular/core';

import { DraggableDemoComponent } from './draggable-demo.component';
import { RebirthUIModule } from '../../exports/rebirth-ui.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, RebirthUIModule],
  exports: [DraggableDemoComponent],
  declarations: [DraggableDemoComponent],
  providers: [],
  entryComponents: [DraggableDemoComponent]
})
export class DraggableDemoModule {
}
