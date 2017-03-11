import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataTableComponent } from './data-table.component';
import { DataTableColumnTmplComponent } from './tmpl/data-table-column-tmpl.component';
import { DataTableCellViewTmplComponent } from './tmpl/data-table-cell-view-tmpl.component';
import { DataTableCellEditTmplComponent } from './tmpl/data-table-cell-edit-tmpl.component';
import { DataTableCellComponent } from './data-table-cell.component';
import { FormsModule } from '@angular/forms';
import { DataTableBodyComponent } from './data-table-body.component';
import { DataTableHeadComponent } from './data-table-head.component';
import { DataTableRowComponent } from './data-table-row.component';
import { DataTableHeadTmplComponent } from './tmpl/data-table-head-tmpl.component';
import { DataTableCellFilterTmplComponent } from './tmpl/data-table-cell-filter-tmpl.component';
import { DataTableFootTmplComponent } from './tmpl/data-table-foot-tmpl.component';
import { DataTableFootComponent } from './data-table-foot.component';
import { PaginationModule } from '../pagination';
import { DataTableTmplsComponent } from './tmpl/data-table-tmpls.component';
import { DataTableCellTmplComponent } from './tmpl/data-table-cell-tmpl.component';
import { DatePickerModule } from '../date-picker/date-picker.module';
import { DataTablePagerComponent } from './data-table-pager.component';
import { DataTablePagerTmplComponent } from './tmpl/data-table-pager-tmpl.component';
import { RebirthCommonModule } from '../common';

@NgModule({
  imports: [CommonModule, FormsModule, PaginationModule, RebirthCommonModule, DatePickerModule],
  exports: [
    DataTableComponent,
    DataTableColumnTmplComponent,
    DataTableCellViewTmplComponent,
    DataTableCellEditTmplComponent,
    DataTableBodyComponent,
    DataTableHeadComponent,
    DataTableCellComponent,
    DataTableHeadTmplComponent,
    DataTableCellFilterTmplComponent,
    DataTableFootTmplComponent,
    DataTableFootComponent,
    DataTableTmplsComponent,
    DataTableCellTmplComponent,
    DataTablePagerComponent,
    DataTablePagerTmplComponent,
    DataTableRowComponent
  ],
  declarations: [
    DataTableComponent,
    DataTableColumnTmplComponent,
    DataTableCellViewTmplComponent,
    DataTableCellEditTmplComponent,
    DataTableBodyComponent,
    DataTableHeadComponent,
    DataTableCellComponent,
    DataTableHeadTmplComponent,
    DataTableCellFilterTmplComponent,
    DataTableFootTmplComponent,
    DataTableFootComponent,
    DataTableTmplsComponent,
    DataTableCellTmplComponent,
    DataTablePagerComponent,
    DataTablePagerTmplComponent,
    DataTableRowComponent
  ],
  providers: [],
})
export class DataTableModule {
}
