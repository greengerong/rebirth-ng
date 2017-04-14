import { Component, Renderer2, ElementRef, Input, TemplateRef, ChangeDetectorRef } from '@angular/core';
import { TooltipPopup } from '../tooltip/tooltip-popup';
import { SCALE_ANIMATIONS } from '../utils/animation-utils';

@Component({
  selector: 're-popover-popup',
  templateUrl: './popover-popup.component.html',
  host: {
    '[class]': '"popover fade  " + placement',
    '[style.display]': '"none"',
    'role': 'tooltip',
    '[@state]': "animateState",
    '(@state.done)': "afterVisibilityAnimation($event)"
  },
  animations: SCALE_ANIMATIONS
})
export class PopoverPopupComponent extends TooltipPopup {
  @Input() title: string | TemplateRef<any>;

  constructor(elementRef: ElementRef, renderer: Renderer2, changeDetectorRef: ChangeDetectorRef) {
    super(elementRef, renderer, changeDetectorRef);
  }
}
