import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { DataTableFootTmplComponent } from './data-table-foot-tmpl.component';

@Component({
  selector: 're-data-table-foot,[reDataTableFoot]',
  templateUrl: './data-table-foot.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataTableFootComponent {
  @Input() footTemplate: DataTableFootTmplComponent;
}
