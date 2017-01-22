import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: 'template[reTabContent]',
})
export class TabContentDirective {
  constructor(public templateRef: TemplateRef<any>) {
  }
}
