import {
  Component,
  ChangeDetectionStrategy,
  Input,
  ContentChildren,
  Output,
  EventEmitter,
  ContentChild,
  ViewChild,
  HostListener,
  QueryList,
  AfterContentInit,
  ChangeDetectorRef
} from '@angular/core';
import { DataTableColumnTmplComponent } from './tmpl/data-table-column-tmpl.component';
import {
  CellSelectedEventArg,
  RowCheckChangeEventArg,
  RowSelectedEventArg,
  SortChangeEventArg, DataTablePager
} from './data-table.model';
import { DataTableHeadTmplComponent } from './tmpl/data-table-head-tmpl.component';
import { DataTableFootTmplComponent } from './tmpl/data-table-foot-tmpl.component';
import { DataTableTmplsComponent } from './tmpl/data-table-tmpls.component';
import { DataTablePagerTmplComponent } from './tmpl/data-table-pager-tmpl.component';
import { RebirthNGConfig } from '../rebirth-ng.config';

@Component({
  selector: 're-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: 'dataTable'
})
export class DataTableComponent implements AfterContentInit {
  @Input() _dataSource: any[] = [];
  @Input() emptyRowText: string;
  @Input() checkable: boolean;
  @Input() selectable: boolean;
  @Input() scrollable: boolean;
  @Input() editModel: 'row' | 'cell' = 'cell';
  @Input() maxHeight: string;
  @Input() type: '' | 'striped' | 'bordered' | 'condensed' = '';
  @Input() hover = true;
  @Input() allChecked: boolean;
  @Input() cssClass: string;
  @Input() tableWidth = '100%';
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
  @ContentChildren(DataTableColumnTmplComponent) columnTemplates: QueryList<DataTableColumnTmplComponent>;

  @ContentChild(DataTableHeadTmplComponent) headTemplate: DataTableHeadTmplComponent;
  @ContentChild(DataTableFootTmplComponent) footTemplate: DataTableFootTmplComponent;
  @ContentChild(DataTablePagerTmplComponent) pagerTemplate: DataTablePagerTmplComponent;
  @ViewChild(DataTableTmplsComponent) dataTableTemplates: DataTableTmplsComponent;
  selectedRowItem: any;
  columns: DataTableColumnTmplComponent[];

  pager: DataTablePager = { total: 0, pageIndex: 1, pageSize: 10 };
  selectedColumnItem: any;
  isCellEdit: boolean;
  editRowItem: any;
  documentClickEvent = new EventEmitter<Event>();

  constructor(private rebirthNGConfig: RebirthNGConfig, private changeDetectorRef: ChangeDetectorRef) {
    this.emptyRowText = rebirthNGConfig.datatable.emptyRowText;
  }

  @Input() set totalRecord(totalRecord: number) {
    this.pager.total = totalRecord;
  }

  @Input() set pageIndex(pageIndex: number) {
    this.pager.pageIndex = pageIndex;
  }

  @Input() set pageSize(pageSize: number) {
    this.pager.pageSize = pageSize;
  }

  @Input() set maxPageItems(maxPageItems: number) {
    this.pager.maxItems = maxPageItems;
  }

  @Input() set dataSource(dataSource: any[]) {
    this._dataSource = dataSource;
    this.allChecked = false;
  }

  get dataSource(): any[] {
    return this._dataSource;
  }

  ngAfterContentInit(): void {
    this.columns = this.columnTemplates.toArray();
    this.columnTemplates.changes.subscribe(() => {
      this.columns = this.columnTemplates.toArray();
      this.changeDetectorRef.markForCheck();
    });
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick($event: Event) {
    this.documentClickEvent.emit($event);
  }

  onCellClick($event: CellSelectedEventArg) {
    this.selectedRowItem = $event.rowItem;
    this.selectedColumnItem = $event.column;
    this.cellClick.emit($event);
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
    this.selectedRowItem = $event.rowItem;
    this.rowClick.emit($event);
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
      this.dataSource = this.dataSource.map(item => {
        item.$$checked = $event;
        return item;
      });
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

  editRow(rowItem, editModel) {
    rowItem.$$edit = true;
    rowItem.$$editModel = editModel;
    this.editRowItem = rowItem;
  }

  endEditRow(rowItem) {
    const editModel = rowItem.$$editModel;
    delete rowItem.$$edit;
    delete rowItem.$$editModel;
    this.editRowItem = null;
    return editModel;
  }
}
