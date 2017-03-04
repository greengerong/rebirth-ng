import {
  Component, OnInit, ChangeDetectionStrategy, Input, ContentChildren, Output,
  EventEmitter
} from '@angular/core';
import { DataTableColumnTmplComponent } from './data-table-column-tmpl.component';
import { CellSelectedEventArg, RowSelectedEventArg } from './data-table.model';

@Component({
  selector: 're-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: 'dataTable'
})
export class DataTableComponent implements OnInit {

  @Input() dataSource: any[] = [];
  @Output() cellClick = new EventEmitter<CellSelectedEventArg>();
  @Output() cellDBClick = new EventEmitter<CellSelectedEventArg>();
  @Output() rowClick = new EventEmitter<RowSelectedEventArg>();
  @Output() rowDBClick = new EventEmitter<RowSelectedEventArg>();
  @Output() cellEditStart = new EventEmitter<CellSelectedEventArg>();
  @Output() cellEditEnd = new EventEmitter<CellSelectedEventArg>();
  @ContentChildren(DataTableColumnTmplComponent) columns: DataTableColumnTmplComponent[];

  selectedRow: number;
  selectedCol: number;
  isCellEdit: boolean;

  constructor() {
  }

  ngOnInit() {
  }

  // onCellClick($event, rowIndex, colIndex, column, rowItem) {
  //   this.selectedRow = rowIndex;
  //   this.selectedCol = colIndex;
  //   const cellSelectedEventArg = { rowIndex, colIndex, column, rowItem };
  //   this.cellClick.emit(cellSelectedEventArg);
  //   if (column.editable) {
  //     this.isCellEdit = true;
  //     $event.stopPropagation();
  //     this.cellEditStart.emit(cellSelectedEventArg);
  //   }
  // }
  //
  // onCellDBClick($event, rowIndex, colIndex, column, rowItem) {
  //   this.cellDBClick.emit({ rowIndex, colIndex, column, rowItem });
  // }
  //
  // onRowClick(rowIndex, rowItem) {
  //   this.selectedRow = rowIndex;
  //   this.rowClick.emit({ rowIndex, rowItem });
  // }
  //
  // onRowDBClick($event, rowIndex, rowItem) {
  //   this.rowDBClick.emit({ rowIndex, rowItem });
  // }
  //
  // isEditCell(rowIndex, colIndex) {
  //   return this.isCellEdit && this.selectedRow === rowIndex && this.selectedCol === colIndex;
  // }
}
