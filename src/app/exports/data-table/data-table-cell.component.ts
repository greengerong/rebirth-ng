import {
  Component, OnInit, ChangeDetectionStrategy, Input, ContentChildren, Output,
  EventEmitter, ChangeDetectorRef
} from '@angular/core';
import { DataTableColumnTmplComponent } from './data-table-column-tmpl.component';
import { CellSelectedEventArg, RowSelectedEventArg } from './data-table.model';
import { DataTableComponent } from './data-table.component';

@Component({
  selector: 're-data-table-cell,[reDataTableCell]',
  templateUrl: './data-table-Cell.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataTableCellComponent {


}
