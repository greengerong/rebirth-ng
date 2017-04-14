import { Component, Renderer2, ElementRef, Input, TemplateRef, ChangeDetectorRef } from '@angular/core';
import { TooltipPopup } from '../tooltip/tooltip-popup';
import { trigger, style, state, transition, animate } from '@angular/animations';

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
export class PopoverPopupComponent extends TooltipPopup {
  @Input() title: string | TemplateRef<any>;

  constructor(elementRef: ElementRef, renderer: Renderer2, changeDetectorRef: ChangeDetectorRef) {
    super(elementRef, renderer, changeDetectorRef);
  }
}
