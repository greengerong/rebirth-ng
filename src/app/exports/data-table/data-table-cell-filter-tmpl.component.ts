import { Component, ChangeDetectionStrategy, ContentChild, TemplateRef } from '@angular/core';

@Component({
  selector: 're-cell-filter',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataTableCellFilterTmplComponent {

  @ContentChild(TemplateRef) template: TemplateRef<any>;

}
