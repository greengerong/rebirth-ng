import { NgModule } from '@angular/core';

import { PanelComponent } from './panel.component';
import { CommonModule } from '@angular/common';
import { PanelHeaderComponent } from './panel-header.component';
import { PanelBodyComponent } from './panel-body.component';
import { PanelFooterComponent } from './panel-footer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    PanelComponent,
    PanelHeaderComponent,
    PanelBodyComponent,
    PanelFooterComponent
  ],
  declarations: [
    PanelComponent,
    PanelHeaderComponent,
    PanelBodyComponent,
    PanelFooterComponent
  ],
  providers: [],
})
export class PanelModule {
}
