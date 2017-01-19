import { NgModule } from '@angular/core';

import { BedgeDemoComponent } from './badge-demo.component';
import { CommonModule } from '@angular/common';
import { RebirthUIModule } from '../../exports';

@NgModule({
  imports: [
    CommonModule,
    RebirthUIModule
  ],
  exports: [BedgeDemoComponent],
  declarations: [BedgeDemoComponent],
  providers: [],
})
export class BadgeDemoModule {
}
