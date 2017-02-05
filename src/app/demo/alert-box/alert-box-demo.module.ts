import { NgModule } from '@angular/core';

import { AlertBoxDemoComponent } from './alert-box-demo.component';
import { RebirthUIModule } from '../../exports/rebirth-ui.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RebirthUIModule
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
