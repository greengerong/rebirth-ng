import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: 'ng-template[reTabTitle]',
})
export class TabTitleDirective {
  constructor(public templateRef: TemplateRef<any>) {
  }
}
