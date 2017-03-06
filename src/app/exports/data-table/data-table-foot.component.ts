import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { DataTableColumnTmplComponent } from './data-table-column-tmpl.component';
import { DataTableComponent } from './data-table.component';
import { DataTableHeadTmplComponent } from './data-table-head-tmpl.component';
import { DataTableFootTmplComponent } from './data-table-footer-tmpl.component';

@Component({
  selector: 're-data-table-foot,[reDataTableFoot]',
  templateUrl: './data-table-foot.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataTableFootComponent {
  @Input() footTemplate: DataTableFootTmplComponent;
}
