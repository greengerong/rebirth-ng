import { Component, ChangeDetectionStrategy, Input, ViewChild } from '@angular/core';
import { DataTableFootTmplComponent } from './tmpl/data-table-foot-tmpl.component';
import { DataTableTmplsComponent } from './tmpl/data-table-tmpls.component';
import { DataTableComponent } from './data-table.component';

@Component({
  selector: 're-data-table-pager,[reDataTablePager]',
  templateUrl: './data-table-pager.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataTablePagerComponent {
  @Input() pager: any;
  @Input() dataTableTemplates: DataTableTmplsComponent;
  @Input() pagerTemplate: DataTableFootTmplComponent;
  pagerMaxItems = 8;

  constructor(public dt: DataTableComponent) {

  }

  onPageChange($event: number) {
    this.dt.onPageChange($event);
  }
}
