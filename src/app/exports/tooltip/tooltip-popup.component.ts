import { Component, ElementRef, Renderer } from '@angular/core';
import { TooltipPopup } from './tooltip-popup';

@Component({
  selector: 're-tooltip-popup',
  templateUrl: './tooltip-popup.component.html',
  host: { '[class]': '"tooltip fade  " + placement', '[style.display]': '"none"', 'role': 'tooltip' }
})
export class TooltipPopupComponent extends TooltipPopup {

  constructor(elementRef: ElementRef, renderer: Renderer) {
    super(elementRef, renderer);
  }
}
