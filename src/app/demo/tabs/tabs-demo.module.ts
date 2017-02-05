import { NgModule } from '@angular/core';

import { TabsDemoComponent } from './tabs-demo.component';
import { CommonModule } from '@angular/common';
import { RebirthUIModule } from '../../exports/rebirth-ui.module';

@NgModule({
  imports: [CommonModule, RebirthUIModule],
  exports: [TabsDemoComponent],
  declarations: [TabsDemoComponent],
  providers: [],
  entryComponents: [TabsDemoComponent]
})
export class TabsDemoModule {
}
