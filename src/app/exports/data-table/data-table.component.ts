import {
  Component, ChangeDetectionStrategy, Input, ContentChildren, Output,
  EventEmitter, ContentChild, ChangeDetectorRef
} from '@angular/core';
import { DataTableColumnTmplComponent } from './data-table-column-tmpl.component';
import {
  CellSelectedEventArg,
  RowCheckChangeEventArg,
  RowSelectedEventArg,
  SortChangeEventArg
} from './data-table.model';
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
  @Input() checkable: boolean;
  @Input() type: '' | 'striped' | 'bordered' | 'condensed' = '';
  @Input() hover = true;
  @Input() allChecked: boolean;
  @Input() cssClass: string;
  @Output() cellClick = new EventEmitter<CellSelectedEventArg>();
  @Output() cellDBClick = new EventEmitter<CellSelectedEventArg>();
  @Output() rowClick = new EventEmitter<RowSelectedEventArg>();
  @Output() rowDBClick = new EventEmitter<RowSelectedEventArg>();
  @Output() cellEditStart = new EventEmitter<CellSelectedEventArg>();
  @Output() cellEditEnd = new EventEmitter<CellSelectedEventArg>();
  @Output() sortChange = new EventEmitter<SortChangeEventArg>();
  @Output() rowCheckChange = new EventEmitter<RowCheckChangeEventArg>();
  @Output() checkAllChange = new EventEmitter<boolean>();

  @ContentChildren(DataTableColumnTmplComponent) columns: DataTableColumnTmplComponent[];
  @ContentChild(DataTableHeadTmplComponent) head: DataTableHeadTmplComponent;

  selectedRowItem: any;
  selectedColumnItem: any;
  isCellEdit: boolean;

  constructor(private changeDetectorRef: ChangeDetectorRef) {
  }

  onCellClick($event: CellSelectedEventArg) {
    if (this.selectedRowItem !== $event.rowItem || this.selectedColumnItem !== $event.column) {
      this.selectedRowItem = $event.rowItem;
      this.selectedColumnItem = $event.column;
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
    if (this.selectedRowItem !== $event.rowItem) {
      this.selectedRowItem = $event.rowItem;
      this.rowClick.emit($event);
    }
  }

  onRowDBClick($event: RowSelectedEventArg) {
    this.rowDBClick.emit($event);
  }

  onRowCheckChange($event: RowCheckChangeEventArg) {
    this.allChecked = !this.dataSource.some(item => !item.$$checked);
    this.rowCheckChange.emit($event);
  }

  onCheckAllChange($event: boolean) {
    if (this.dataSource) {
      this.dataSource.forEach(item => item.$$checked = $event);
    }
    this.allChecked = $event;
    this.checkAllChange.emit($event);
  }

  getCheckRows(): any[] {
    return this.dataSource ? this.dataSource.filter(item => item.$$checked) : [];
  }

  getSelectedRowItem(): any[] {
    return this.selectedRowItem;
  }
}
