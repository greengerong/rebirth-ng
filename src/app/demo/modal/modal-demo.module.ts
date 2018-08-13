import { NgModule } from '@angular/core';

import { ModalDemoComponent, ModalTestComponent } from './modal-demo.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ModalDemoComponent
  ],
  declarations: [
    ModalDemoComponent,
    ModalTestComponent
  ],
  entryComponents: [
    ModalTestComponent,
    ModalDemoComponent
  ]
})
export class ModalDemoModule {
}
