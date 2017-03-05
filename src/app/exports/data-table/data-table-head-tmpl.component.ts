import { Component, ChangeDetectionStrategy, ContentChild, Input, TemplateRef } from '@angular/core';
import { DataTableCellTmplComponent } from './data-table-cell-tmpl.component';
import { DataTableCellEditTmplComponent } from './data-table-cell-edit-tmpl.component';

@Component({
  selector: 're-head',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataTableHeadTmplComponent {

  @ContentChild(TemplateRef) template: TemplateRef<any>;
  
}
