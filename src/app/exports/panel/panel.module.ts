import { NgModule } from '@angular/core';

import { PanelComponent } from './panel.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [PanelComponent],
  declarations: [PanelComponent],
  providers: [],
})
export class PanelModule {
}
