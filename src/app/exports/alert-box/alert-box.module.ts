import { NgModule } from '@angular/core';

import { AlertBoxComponent } from './alert-box.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [],
  declarations: [
    AlertBoxComponent
  ],
  exports: [
    AlertBoxComponent
  ],
})
export class AlertBoxModule {
}
