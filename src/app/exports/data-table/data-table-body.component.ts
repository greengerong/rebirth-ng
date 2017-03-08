import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { DataTableColumnTmplComponent } from './tmpl/data-table-column-tmpl.component';
import { DataTableComponent } from './data-table.component';
import { DataTableTmplsComponent } from './tmpl/data-table-tmpls.component';

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
  @Input() dataTableTemplates: DataTableTmplsComponent;

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
