import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: 'template[reTabTitle]',
})
export class TabTitleDirective {
  constructor(public templateRef: TemplateRef<any>) {
  }
}
