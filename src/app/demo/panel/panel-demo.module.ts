import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelDemoComponent } from './panel-demo.component';
import { RebirthUIModule } from '../../exports';

@NgModule({
  imports: [
    CommonModule,
    RebirthUIModule
  ],
  exports: [PanelDemoComponent],
  declarations: [PanelDemoComponent],
  providers: [],
})
export class PanelDemoModule {
}
