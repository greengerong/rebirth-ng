import { NgModule } from '@angular/core';

import { PaginationDemoComponent } from './pagination-demo.component';
import { RebirthNGModule } from '../../exports';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    RebirthNGModule
  ],
  declarations: [
    PaginationDemoComponent
  ],
  exports: [
    PaginationDemoComponent
  ],
  entryComponents: [PaginationDemoComponent],
  providers: []
})
export class PaginationDemoModule {

}
