import { Component, ElementRef, Renderer2, ChangeDetectorRef } from '@angular/core';
import { TooltipPopup } from './tooltip-popup';
import { trigger, state, style, animate, transition, AnimationEvent } from '@angular/animations';

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
  animations: [
    trigger('state', [
      state('void', style({ transform: 'scale(0)' })),
      state('initial', style({ transform: 'scale(0)' })),
      state('visible', style({ transform: 'scale(1)' })),
      state('hidden', style({ transform: 'scale(0)' })),
      transition('* => visible', animate('150ms cubic-bezier(0.0, 0.0, 0.2, 1)')),
      transition('* => hidden', animate('150ms cubic-bezier(0.4, 0.0, 1, 1)')),
    ])
  ],
})
export class TooltipPopupComponent extends TooltipPopup {

  constructor(elementRef: ElementRef, renderer: Renderer2, changeDetectorRef: ChangeDetectorRef) {
    super(elementRef, renderer, changeDetectorRef);
  }
}
