import {
  Component, ChangeDetectionStrategy, Input, ContentChildren, Output,
  EventEmitter, ContentChild
} from '@angular/core';
import { DataTableColumnTmplComponent } from './data-table-column-tmpl.component';
import { CellSelectedEventArg, RowSelectedEventArg, SortChangeEventArg } from './data-table.model';
import { DataTableHeadTmplComponent } from './data-table-head-tmpl.component';

@Component({
  selector: 're-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: 'dataTable'
})
export class DataTableComponent {

  @Input() dataSource: any[] = [];
  @Input() type: '' | 'striped' | 'bordered' | 'condensed' | 'hover' = '';
  @Input() cssClass: string;
  @Output() cellClick = new EventEmitter<CellSelectedEventArg>();
  @Output() cellDBClick = new EventEmitter<CellSelectedEventArg>();
  @Output() rowClick = new EventEmitter<RowSelectedEventArg>();
  @Output() rowDBClick = new EventEmitter<RowSelectedEventArg>();
  @Output() cellEditStart = new EventEmitter<CellSelectedEventArg>();
  @Output() cellEditEnd = new EventEmitter<CellSelectedEventArg>();
  @Output() sortChange = new EventEmitter<SortChangeEventArg>();
  @ContentChildren(DataTableColumnTmplComponent) columns: DataTableColumnTmplComponent[];
  @ContentChild(DataTableHeadTmplComponent) head: DataTableHeadTmplComponent;

  selectedRow: number;
  selectedCol: number;
  isCellEdit: boolean;

  constructor() {
  }

  onCellClick($event: CellSelectedEventArg) {
    if (this.selectedRow !== $event.rowIndex || this.selectedCol !== $event.colIndex) {
      this.selectedRow = $event.rowIndex;
      this.selectedCol = $event.colIndex;
      this.cellClick.emit($event);
    }
  }

  onCellEditStart($event: CellSelectedEventArg) {
    this.isCellEdit = true;
    this.cellEditStart.emit($event);
  }

  onCellEditEnd($event: CellSelectedEventArg) {
    this.isCellEdit = false;
    this.cellEditEnd.emit($event);
  }

  onCellDBClick($event: CellSelectedEventArg) {
    this.cellDBClick.emit($event);
  }

  onRowClick($event: RowSelectedEventArg) {
    if (this.selectedRow !== $event.rowIndex) {
      this.selectedRow = $event.rowIndex;
      this.rowClick.emit($event);
    }
  }

  onRowDBClick($event: RowSelectedEventArg) {
    this.rowDBClick.emit($event);
  }

}
