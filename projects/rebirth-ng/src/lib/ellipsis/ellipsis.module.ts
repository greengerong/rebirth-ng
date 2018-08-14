import { NgModule } from '@angular/core';

import { EllipsisComponent } from './ellipsis.component';
import { CommonModule } from '@angular/common';
import { TooltipModule } from '../tooltip/index';

@NgModule({
  imports: [
    CommonModule,
    TooltipModule
  ],
  providers: [],
  declarations: [
    EllipsisComponent
  ],
  exports: [
    EllipsisComponent
  ],
})
export class EllipsisModule {
}
