import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataTableDemoComponent } from './data-table-demo.component';
import { RebirthNGModule } from '../../exports';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, RebirthNGModule, FormsModule],
  exports: [DataTableDemoComponent],
  declarations: [DataTableDemoComponent],
  providers: [],
  entryComponents: [DataTableDemoComponent]
})
export class DataTableDemoModule {
}
