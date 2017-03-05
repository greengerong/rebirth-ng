import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { DataTableColumnTmplComponent } from './data-table-column-tmpl.component';
import { DataTableComponent } from './data-table.component';
import { DataTableHeadTmplComponent } from './data-table-head-tmpl.component';

@Component({
  selector: 're-data-table-head,[reDataTableHead]',
  templateUrl: './data-table-head.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataTableHeadComponent {
  @Input() checkable: boolean;
  @Input() allChecked: boolean;
  @Input() head: DataTableHeadTmplComponent;
  @Input() columns: DataTableColumnTmplComponent[];
  sortField: string;
  sortDirection: 'ASC' | 'DESC';

  constructor(public dt: DataTableComponent) {

  }

  onHeadClick(column: DataTableColumnTmplComponent) {
    if (!column.sortable) {
      return;
    }

    if (this.sortField === column.field) {
      this.sortDirection = this.sortDirection === 'ASC' ? 'DESC' : 'ASC';
    } else {
      this.sortField = column.field;
      this.sortDirection = 'ASC';
    }

    this.dt.sortChange.emit({ field: this.sortField, direction: this.sortDirection, column });
  }

  onCheckAllChange() {
    this.dt.onCheckAllChange(this.allChecked);
  }
}
