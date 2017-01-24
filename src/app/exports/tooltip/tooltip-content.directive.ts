import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: 'template[reTooltipContent]',
  exportAs: 'tooltipContent'
})
export class TooltipContentDirective {
  constructor(public templateRef: TemplateRef<any>) {
  }
}
