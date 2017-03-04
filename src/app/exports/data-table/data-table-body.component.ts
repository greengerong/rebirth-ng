import {
  Component, OnInit, ChangeDetectionStrategy, Input, ContentChildren, Output,
  EventEmitter, ChangeDetectorRef
} from '@angular/core';
import { DataTableColumnTmplComponent } from './data-table-column-tmpl.component';
import { CellSelectedEventArg, RowSelectedEventArg } from './data-table.model';
import { DataTableComponent } from './data-table.component';

@Component({
  selector: 're-data-table-body,[reDataTableBody]',
  templateUrl: './data-table-body.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataTableBodyComponent {
  @Input() dataSource: any[] = [];
  @Input() columns: DataTableColumnTmplComponent[];
  isCellEdit: boolean;
  selectedRow: number;
  selectedCol: number;

  constructor(private dt: DataTableComponent, private changeDetectorRef: ChangeDetectorRef) {

  }

  onCellClick($event, rowIndex, colIndex, column, rowItem) {
    this.selectedRow = rowIndex;
    this.selectedCol = colIndex;
    const cellSelectedEventArg = { rowIndex, colIndex, column, rowItem };
    this.dt.cellClick.emit(cellSelectedEventArg);
    if (column.editable) {
      this.isCellEdit = true;
      $event.stopPropagation();
      this.dt.cellEditStart.emit(cellSelectedEventArg);
    }
  }

  onFinishCellEdit($event, rowIndex, colIndex, column, rowItem) {
    this.isCellEdit = false;
    this.selectedCol = null;
    if ($event) {
      $event.stopPropagation();
    }
    this.dt.cellEditEnd.emit({ rowIndex, colIndex, column, rowItem });
  }

  onCellDBClick($event, rowIndex, colIndex, column, rowItem) {
    const cellSelectedEventArg = { rowIndex, colIndex, column, rowItem };
    this.dt.cellDBClick.emit(cellSelectedEventArg);
  }

  onRowClick(rowIndex, rowItem) {
    this.selectedRow = rowIndex;
    this.dt.rowClick.emit({ rowIndex, rowItem });
  }

  onRowDBClick($event, rowIndex, rowItem) {
    this.dt.rowDBClick.emit({ rowIndex, rowItem });
  }

  isEditCell(rowIndex, colIndex) {
    return this.isCellEdit && this.selectedRow === rowIndex && this.selectedCol === colIndex;
  }

}
