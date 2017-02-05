import { NgModule } from '@angular/core';

import { BadgeDemoComponent } from './badge-demo.component';
import { CommonModule } from '@angular/common';
import { RebirthUIModule } from '../../exports';

@NgModule({
  imports: [
    CommonModule,
    RebirthUIModule
  ],
  exports: [BadgeDemoComponent],
  declarations: [BadgeDemoComponent],
  providers: [],
  entryComponents: [BadgeDemoComponent]
})
export class BadgeDemoModule {
}
