import { NgModule } from '@angular/core';

import { TabsDemoComponent } from './tabs-demo.component';
import { CommonModule } from '@angular/common';
import { RebirthNGModule } from '../../exports';

@NgModule({
  imports: [CommonModule, RebirthNGModule],
  exports: [TabsDemoComponent],
  declarations: [TabsDemoComponent],
  providers: [],
  entryComponents: [TabsDemoComponent]
})
export class TabsDemoModule {
}
