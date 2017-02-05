import { NgModule } from '@angular/core';

import { DialogDemoComponent } from './dialog-demo.component';
import { RebirthUIModule } from '../../exports/rebirth-ui.module';

@NgModule({
  imports: [
    RebirthUIModule
  ],
  declarations: [
    DialogDemoComponent
  ]
  ,
  exports: [
    DialogDemoComponent
  ],
  providers: [],
  entryComponents: [
    DialogDemoComponent
  ]
})
export class DialogDemoModule {
}
