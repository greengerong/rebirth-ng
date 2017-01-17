import { NgModule } from '@angular/core';

import { ModalDemoComponent, ModalTestComponent } from './modal-demo.component';
import { SharedModule } from '../../shared';

@NgModule({
  imports: [
    SharedModule
  ],
  exports: [
    ModalDemoComponent
  ],
  declarations: [
    ModalDemoComponent,
    ModalTestComponent
  ],
  entryComponents: [
    ModalTestComponent
  ]
})
export class ModalDemoModule {
}
