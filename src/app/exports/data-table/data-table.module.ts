import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataTableComponent } from './data-table.component';
import { DataTableColumnTmplComponent } from './data-table-column-tmpl.component';
import { DataTableCellTmplComponent } from './data-table-cell-tmpl.component';
import { DataTableCellEditTmplComponent } from './data-table-cell-edit-tmpl.component';
import { DataTableCellComponent } from './data-table-cell.component';
import { FormsModule } from '@angular/forms';
import { DataTableBodyComponent } from './data-table-body.component';
import { DataTableHeadComponent } from './data-table-head.component';
import { DataTableHeadTmplComponent } from './data-table-head-tmpl.component';
import { DataTableCellFilterTmplComponent } from './data-table-cell-filter-tmpl.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  exports: [
    DataTableComponent,
    DataTableColumnTmplComponent,
    DataTableCellTmplComponent,
    DataTableCellEditTmplComponent,
    DataTableBodyComponent,
    DataTableHeadComponent,
    DataTableCellComponent,
    DataTableHeadTmplComponent,
    DataTableCellFilterTmplComponent
  ],
  declarations: [
    DataTableComponent,
    DataTableColumnTmplComponent,
    DataTableCellTmplComponent,
    DataTableCellEditTmplComponent,
    DataTableBodyComponent,
    DataTableHeadComponent,
    DataTableCellComponent,
    DataTableHeadTmplComponent,
    DataTableCellFilterTmplComponent
  ],
  providers: [],
})
export class DataTableModule {
}
