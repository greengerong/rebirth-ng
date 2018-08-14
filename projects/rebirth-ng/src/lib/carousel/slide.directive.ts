import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: 'ng-template[reSlide]',
})
export class SlideDirective {
  constructor(public templateRef: TemplateRef<any>) {
  }

}
