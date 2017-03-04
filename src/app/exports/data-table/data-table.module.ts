import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataTableComponent } from './data-table.component';
import { DataTableColumnTmplComponent } from './data-table-column-tmpl.component';
import { DataTableCellTmplComponent } from './data-table-cell-tmpl.component';
import { DataTableCellEditTmplComponent } from './data-table-cell-edit-tmpl.component';
import { FormsModule } from '@angular/forms';
import { DataTableBodyComponent } from './data-table-body.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  exports: [
    DataTableComponent,
    DataTableColumnTmplComponent,
    DataTableCellTmplComponent,
    DataTableCellEditTmplComponent
  ],
  declarations: [
    DataTableComponent,
    DataTableColumnTmplComponent,
    DataTableCellTmplComponent,
    DataTableCellEditTmplComponent,
    DataTableBodyComponent
  ],
  providers: [],
})
export class DataTableModule {
}
