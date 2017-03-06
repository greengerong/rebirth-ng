import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { DataTableColumnTmplComponent } from './data-table-column-tmpl.component';
import { DataTableComponent } from './data-table.component';

@Component({
  selector: 're-data-table-body,[reDataTableBody]',
  templateUrl: './data-table-body.component.html',
  styleUrls: ['./data-table-body.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataTableBodyComponent {
  @Input() checkable: boolean;
  @Input() allChecked: boolean;
  @Input() selectable: boolean;
  @Input() dataSource: any[] = [];
  @Input() columns: DataTableColumnTmplComponent[];

  constructor(public dt: DataTableComponent) {

  }

  onRowClick($event, rowIndex, rowItem) {
    this.dt.onRowClick({ rowIndex, rowItem });
  }

  onRowDBClick($event, rowIndex, rowItem) {
    this.dt.onRowDBClick({ rowIndex, rowItem });
  }

  onRowCheckChange(rowIndex, rowItem) {
    this.dt.onRowCheckChange({ rowItem, rowIndex, checked: rowItem.$$checked });
  }
}
