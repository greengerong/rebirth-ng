import { NgModule } from '@angular/core';

import { PaginationDemoComponent } from './pagination-demo.component';
import { RebirthUIModule } from '../../exports/rebirth-ui.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    RebirthUIModule
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
