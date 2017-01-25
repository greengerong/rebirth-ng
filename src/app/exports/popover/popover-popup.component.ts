import { Component, Renderer, ElementRef, Input, TemplateRef } from '@angular/core';
import { TooltipPopup } from '../tooltip/tooltip-popup';

@Component({
  selector: 're-popover-popup',
  templateUrl: './popover-popup.component.html',
  host: { '[class]': '"popover fade  " + placement', '[style.display]': '"none"', 'role': 'tooltip' }
})
export class PopoverPopupComponent extends TooltipPopup {
  @Input() title: string | TemplateRef<any>;

  constructor(elementRef: ElementRef, renderer: Renderer) {
    super(elementRef, renderer);
  }
}
