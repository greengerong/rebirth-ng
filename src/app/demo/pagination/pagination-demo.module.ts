import { NgModule } from '@angular/core';

import { PaginationDemoComponent } from './pagination-demo.component';
import { RebirthNGModule } from 'rebirth-ng';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
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
