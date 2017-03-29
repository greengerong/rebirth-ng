import { NgModule } from '@angular/core';

import { DialogDemoComponent } from './dialog-demo.component';
import { RebirthNGModule } from '../../exports';

@NgModule({
  imports: [
    RebirthNGModule
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
