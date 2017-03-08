import {
  Component,
  ChangeDetectionStrategy,
  Input,
  ContentChildren,
  Output,
  EventEmitter,
  ContentChild,
  ChangeDetectorRef,
  OnDestroy,
  ViewChild
} from '@angular/core';
import { DataTableColumnTmplComponent } from './data-table-column-tmpl.component';
import {
  CellSelectedEventArg,
  RowCheckChangeEventArg,
  RowSelectedEventArg,
  SortChangeEventArg
} from './data-table.model';
import { DataTableHeadTmplComponent } from './data-table-head-tmpl.component';
import { DataTableFootTmplComponent } from './data-table-foot-tmpl.component';
import { DataTableCellTmplsComponent } from './data-table-cell-tmpls.component';

@Component({
  selector: 're-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: 'dataTable'
})
export class DataTableComponent implements OnDestroy {

  @Input() dataSource: any[] = [];
  @Input() checkable: boolean;
  @Input() selectable: boolean;
  @Input() scrollable: boolean;
  @Input() maxHeight: string;
  @Input() type: '' | 'striped' | 'bordered' | 'condensed' = '';
  @Input() hover = true;
  @Input() allChecked: boolean;
  @Input() pager: any;
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
  @Output() searchQueryChange = new EventEmitter<{ [key: string]: any; }>();
  @Output() pageIndexChange = new EventEmitter<number>();

  @ContentChildren(DataTableColumnTmplComponent) columns: DataTableColumnTmplComponent[];
  @ContentChild(DataTableHeadTmplComponent) headTemplate: DataTableHeadTmplComponent;
  @ContentChild(DataTableFootTmplComponent) footTemplate: DataTableFootTmplComponent;
  @ViewChild(DataTableCellTmplsComponent) cellTemplates: DataTableCellTmplsComponent;

  pagerMaxItems = 8;
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

  onSearchQueryChange($event: { [key: string]: any; }) {
    this.searchQueryChange.emit($event);
  }

  onPageChange($event: number) {
    this.pageIndexChange.emit($event);
  }

  getCheckRows(): any[] {
    return this.dataSource ? this.dataSource.filter(item => item.$$checked) : [];
  }

  getSelectedRowItem(): any[] {
    return this.selectedRowItem;
  }

  ngOnDestroy(): void {

  }
}
