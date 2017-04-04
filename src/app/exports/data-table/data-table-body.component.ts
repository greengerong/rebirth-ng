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
  @Input() editModel: 'row' | 'cell';
  @Input() editRowItem: any;
  @Input() dataSource: any;
  @Input() emptyLinePlaceholder: string;
  @Input() columns: DataTableColumnTmplComponent[];
  @Input() dataTableTemplates: DataTableTmplsComponent;

  constructor(public dt: DataTableComponent) {

  }

  isEmpty(dataSource) {
    return !dataSource || !(dataSource.length || dataSource.size);
  }
}
