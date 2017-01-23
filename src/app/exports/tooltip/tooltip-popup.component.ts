import { Component, ChangeDetectionStrategy, Input, ElementRef, Renderer, TemplateRef } from '@angular/core';

@Component({
  selector: 're-tooltip-popup',
  templateUrl: './tooltip-popup.component.html',
  host: { '[class]': '"tooltip fade  " + placement', 'role': 'tooltip' },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TooltipPopupComponent {
  static ACTIVE_CLASS = 'in';
  @Input() placement: 'top' | 'bottom' | 'left' | 'right' = 'top';
  @Input() content: string | TemplateRef<any>;

  constructor(private elementRef: ElementRef, private renderer: Renderer) {
  }

  show() {
    this.renderer.setElementClass(this.elementRef.nativeElement, TooltipPopupComponent.ACTIVE_CLASS, true);
  }

  hide() {
    this.renderer.setElementClass(this.elementRef.nativeElement, TooltipPopupComponent.ACTIVE_CLASS, false);
  }
}
