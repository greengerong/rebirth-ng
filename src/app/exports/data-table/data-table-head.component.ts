import { Component, ChangeDetectionStrategy, Input, QueryList } from '@angular/core';
import { DataTableColumnTmplComponent } from './data-table-column-tmpl.component';
import { DataTableComponent } from './data-table.component';
import { DataTableHeadTmplComponent } from './data-table-head-tmpl.component';
import { DataTableCellTmplsComponent } from './data-table-cell-tmpls.component';
import { DataTableCellTmplComponent } from './data-table-cell-tmpl.component';

@Component({
  selector: 're-data-table-head,[reDataTableHead]',
  templateUrl: './data-table-head.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataTableHeadComponent {
  @Input() checkable: boolean;
  @Input() allChecked: boolean;
  @Input() headTemplate: DataTableHeadTmplComponent;
  @Input() columns: DataTableColumnTmplComponent[];
  @Input() cellTemplates: DataTableCellTmplsComponent;

  searchQuery: { [key: string]: any; } = {};
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

  hasAnyFilterColumns(columns) {
    return (columns || []).some(col => col.filterable);
  }

  onCheckAllChange() {
    this.dt.onCheckAllChange(this.allChecked);
  }

  onSearchQueryChange() {
    this.dt.onSearchQueryChange(this.searchQuery);
  }

  canFilterable(column: DataTableColumnTmplComponent) {
    return column.field && column.field !== '$index' && column.filterable;
  }
}
