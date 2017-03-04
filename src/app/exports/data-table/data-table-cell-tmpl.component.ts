import { Component, ChangeDetectionStrategy, ContentChild, TemplateRef } from '@angular/core';

@Component({
  selector: 're-cell',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataTableCellTmplComponent {

  @ContentChild(TemplateRef) template: TemplateRef<any>;

}
