import { NgModule } from '@angular/core';

import { BadgeDemoComponent } from './badge-demo.component';
import { CommonModule } from '@angular/common';
import { RebirthNGModule } from 'rebirth-ng';

@NgModule({
  imports: [
    CommonModule,
    RebirthNGModule
  ],
  exports: [BadgeDemoComponent],
  declarations: [BadgeDemoComponent],
  providers: [],
  entryComponents: [BadgeDemoComponent]
})
export class BadgeDemoModule {
}
