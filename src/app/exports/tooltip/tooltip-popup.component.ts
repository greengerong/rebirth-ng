import { Component, ElementRef, Renderer2, ChangeDetectorRef } from '@angular/core';
import { TooltipPopup } from './tooltip-popup';
import { SCALE_ANIMATIONS } from '../utils/animation-utils';

@Component({
  selector: 're-tooltip-popup',
  templateUrl: './tooltip-popup.component.html',
  host: {
    '[class]': '"tooltip fade  " + placement',
    '[style.display]': '"none"',
    'role': 'tooltip',
    '[@state]': "animateState",
    '(@state.done)': "afterVisibilityAnimation($event)"
  },
  animations: SCALE_ANIMATIONS,
})
export class TooltipPopupComponent extends TooltipPopup {

  constructor(elementRef: ElementRef, renderer: Renderer2, changeDetectorRef: ChangeDetectorRef) {
    super(elementRef, renderer, changeDetectorRef);
  }
}
