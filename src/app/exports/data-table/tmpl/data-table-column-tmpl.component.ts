import { Component, ChangeDetectionStrategy, ContentChild, Input } from '@angular/core';
import { DataTableCellViewTmplComponent } from './data-table-cell-view-tmpl.component';
import { DataTableCellEditTmplComponent } from './data-table-cell-edit-tmpl.component';
import { DataTableCellFilterTmplComponent } from './data-table-cell-filter-tmpl.component';

@Component({
  selector: 're-column',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataTableColumnTmplComponent {
  @Input() fieldType: DataTableFieldType = 'text';
  @Input() field: string;
  @Input() header: string;
  @Input() sortable: boolean;
  @Input() editable: boolean;
  @Input() filterable: boolean;
  @Input() cellClass: string;
  @Input() width: string;
  @Input() extraOptions: any;
  @ContentChild(DataTableCellViewTmplComponent) cellCmp: DataTableCellViewTmplComponent;
  @ContentChild(DataTableCellEditTmplComponent) cellEditCmp: DataTableCellEditTmplComponent;
  @ContentChild(DataTableCellFilterTmplComponent) cellFilterCmp: DataTableCellFilterTmplComponent;
  @Input() formatter: (item: any) => string = item => item && item.toString();

}
