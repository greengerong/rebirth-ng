import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataTableComponent } from './data-table.component';
import { DataTableColumnTmplComponent } from './data-table-column-tmpl.component';
import { DataTableCellTmplComponent } from './data-table-cell-tmpl.component';
import { DataTableCellEditTmplComponent } from './data-table-cell-edit-tmpl.component';
import { DataTableCellViewComponent } from './data-table-cell-view.component';
import { FormsModule } from '@angular/forms';
import { DataTableBodyComponent } from './data-table-body.component';
import { DataTableHeadComponent } from './data-table-head.component';
import { DataTableHeadTmplComponent } from './data-table-head-tmpl.component';
import { DataTableCellFilterTmplComponent } from './data-table-cell-filter-tmpl.component';
import { DataTableFootTmplComponent } from './data-table-foot-tmpl.component';
import { DataTableFootComponent } from './data-table-foot.component';
import { PaginationModule } from '../pagination';

@NgModule({
  imports: [CommonModule, FormsModule, PaginationModule],
  exports: [
    DataTableComponent,
    DataTableColumnTmplComponent,
    DataTableCellTmplComponent,
    DataTableCellEditTmplComponent,
    DataTableBodyComponent,
    DataTableHeadComponent,
    DataTableCellViewComponent,
    DataTableHeadTmplComponent,
    DataTableCellFilterTmplComponent,
    DataTableFootTmplComponent,
    DataTableFootComponent
  ],
  declarations: [
    DataTableComponent,
    DataTableColumnTmplComponent,
    DataTableCellTmplComponent,
    DataTableCellEditTmplComponent,
    DataTableBodyComponent,
    DataTableHeadComponent,
    DataTableCellViewComponent,
    DataTableHeadTmplComponent,
    DataTableCellFilterTmplComponent,
    DataTableFootTmplComponent,
    DataTableFootComponent
  ],
  providers: [],
})
export class DataTableModule {
}
