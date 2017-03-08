import { Component, ChangeDetectionStrategy, ContentChild, TemplateRef } from '@angular/core';

@Component({
  selector: 're-cell-edit',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataTableCellEditTmplComponent {

  @ContentChild(TemplateRef) template: TemplateRef<any>;

}
