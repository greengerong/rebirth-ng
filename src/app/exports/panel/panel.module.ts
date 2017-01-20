import { NgModule } from '@angular/core';

import { PanelComponent } from './panel.component';
import { CommonModule } from '@angular/common';
import { PanelHeaderComponent } from './panel-header.component';
import { PanelBodyComponent } from './panel-body.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    PanelComponent,
    PanelHeaderComponent,
    PanelBodyComponent
  ],
  declarations: [
    PanelComponent,
    PanelHeaderComponent,
    PanelBodyComponent
  ],
  providers: [],
})
export class PanelModule {
}
