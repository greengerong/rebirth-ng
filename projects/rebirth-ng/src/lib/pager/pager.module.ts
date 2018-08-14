import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagerComponent } from './pager.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PagerComponent
  ],
  exports: [
    PagerComponent
  ],
  providers: [],
})
export class PagerModule {
}
