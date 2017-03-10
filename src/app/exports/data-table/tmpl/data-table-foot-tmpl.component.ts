import { Component, ChangeDetectionStrategy, ContentChild, TemplateRef } from '@angular/core';

@Component({
  selector: 're-foot',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataTableFootTmplComponent {

  @ContentChild(TemplateRef) template: TemplateRef<any>;

}
