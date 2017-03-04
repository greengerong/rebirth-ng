import { Component, ChangeDetectionStrategy, ContentChild, Input } from '@angular/core';
import { DataTableCellTmplComponent } from './data-table-cell-tmpl.component';
import { DataTableCellEditTmplComponent } from './data-table-cell-edit-tmpl.component';

@Component({
  selector: 're-column',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataTableColumnTmplComponent {
  @Input() field: string;
  @Input() header: string;
  @Input() sortable: boolean;
  @Input() editable: boolean;
  @Input() cellClass: string;
  @Input() width: string;
  @ContentChild(DataTableCellTmplComponent) cellCmp: DataTableCellTmplComponent;
  @ContentChild(DataTableCellEditTmplComponent) cellEditCmp: DataTableCellEditTmplComponent;

  @Input() formatter: (item: any) => string = item => item && item.toString();
}
