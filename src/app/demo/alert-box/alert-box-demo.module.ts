import { NgModule } from '@angular/core';

import { AlertBoxDemoComponent } from './alert-box-demo.component';
import { RebirthNGModule } from 'rebirth-ng';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RebirthNGModule
  ],
  declarations: [
    AlertBoxDemoComponent
  ],
  exports: [
    AlertBoxDemoComponent
  ],
  providers: [],
  entryComponents: [AlertBoxDemoComponent]

})
export class AlertBoxDemoModule {
}
