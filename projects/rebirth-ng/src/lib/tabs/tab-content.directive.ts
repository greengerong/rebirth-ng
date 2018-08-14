import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: 'ng-template[reTabContent]',
})
export class TabContentDirective {
  constructor(public templateRef: TemplateRef<any>) {
  }
}
