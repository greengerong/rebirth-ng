import { NgModule } from '@angular/core';

import { AlertBoxComponent } from './alert-box.component';
import { CommonModule } from '@angular/common';
import { AlertBoxPanelComponent } from './alert-box-panel.component';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [],
  declarations: [
    AlertBoxComponent,
    AlertBoxPanelComponent
  ],
  exports: [
    AlertBoxComponent,
    AlertBoxPanelComponent
  ],
  entryComponents: [AlertBoxPanelComponent]
})
export class AlertBoxModule {
}
