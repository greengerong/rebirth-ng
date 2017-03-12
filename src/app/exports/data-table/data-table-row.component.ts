import {
  Component, ChangeDetectionStrategy, Input, HostListener, ChangeDetectorRef, ViewChildren, QueryList, forwardRef,
  EventEmitter
} from '@angular/core';
import { DataTableColumnTmplComponent } from './tmpl/data-table-column-tmpl.component';
import { DataTableComponent } from './data-table.component';
import { DataTableTmplsComponent } from './tmpl/data-table-tmpls.component';
import { ForceUpdateReason } from './force-update-reason.model';

@Component({
  selector: 're-data-table-row,[reDataTableRow]',
  templateUrl: './data-table-row.component.html',
  host: {
    '[class.table-row-selected]': 'selectable && (rowItem == dt.selectedRowItem)',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataTableRowComponent {
  @Input() checkable: boolean;
  @Input() rowItem: any;
  @Input() rowIndex: number;
  @Input() allChecked: boolean;
  @Input() columns: QueryList<DataTableColumnTmplComponent>;
  @Input() dataTableTemplates: DataTableTmplsComponent;
  @Input() editModel: DataTableEditModel;
  @Input() editRowItem: any;
  forceUpdateEvent = new EventEmitter<ForceUpdateReason>();

  constructor(public dt: DataTableComponent, private changeDetectorRef: ChangeDetectorRef) {

  }

  forceUpdate() {
    this.changeDetectorRef.markForCheck();
    this.forceUpdateEvent.emit(ForceUpdateReason.RowUpdate);
  }

  @HostListener('click', ['$event'])
  onRowClick($event) {
    this.dt.onRowClick({ rowIndex: this.rowIndex, rowItem: this.rowItem, rowComponent: this });
  }

  @HostListener('dblclick', ['$event'])
  onRowDBClick($event) {
    this.dt.onRowDBClick({ rowIndex: this.rowIndex, rowItem: this.rowItem, rowComponent: this });
  }

  onRowCheckChange(rowIndex, rowItem) {
    this.dt.onRowCheckChange({ rowItem, rowIndex, checked: rowItem.$$checked });
  }

}
