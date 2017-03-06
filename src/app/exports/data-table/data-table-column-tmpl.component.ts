import { Component, ChangeDetectionStrategy, ContentChild, Input } from '@angular/core';
import { DataTableCellTmplComponent } from './data-table-cell-tmpl.component';
import { DataTableCellEditTmplComponent } from './data-table-cell-edit-tmpl.component';
import { DataTableCellFilterTmplComponent } from './data-table-cell-filter-tmpl.component';

@Component({
  selector: 're-column',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataTableColumnTmplComponent {

  fieldTemplateMap: any;
  @Input() field: string;
  @Input() fieldType: 'text' | 'number' | 'tel' | 'mail' | 'date' | 'dateTime' | 'select' | string = 'text';
  @Input() header: string;
  @Input() sortable: boolean;
  @Input() editable: boolean;
  @Input() filterable: boolean;
  @Input() cellClass: string;
  @Input() width: string;
  @Input() extraOptions: any;
  @ContentChild(DataTableCellTmplComponent) cellCmp: DataTableCellTmplComponent;
  @ContentChild(DataTableCellEditTmplComponent) cellEditCmp: DataTableCellEditTmplComponent;
  @ContentChild(DataTableCellFilterTmplComponent) cellFilterCmp: DataTableCellFilterTmplComponent;
  @Input() formatter: (item: any) => string = item => item && item.toString();

}
