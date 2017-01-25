import { Component, ChangeDetectionStrategy, Input, ElementRef, Renderer, TemplateRef } from '@angular/core';

@Component({
  selector: 're-tooltip-popup',
  templateUrl: './tooltip-popup.component.html',
  host: { '[class]': '"tooltip fade  " + placement', 'style.display': 'none', 'role': 'tooltip' }
})
export class TooltipPopupComponent {
  static ACTIVE_CLASS = 'in';
  @Input() placement: 'top' | 'bottom' | 'left' | 'right' = 'top';
  @Input() content: string | TemplateRef<any>;
  @Input() context: any;

  constructor(private elementRef: ElementRef, private renderer: Renderer) {
  }

  show() {
    this.renderer.setElementClass(this.elementRef.nativeElement, TooltipPopupComponent.ACTIVE_CLASS, true);
    this.renderer.setElementStyle(this.elementRef.nativeElement, 'display', 'block');
  }

  hide() {
    this.renderer.setElementClass(this.elementRef.nativeElement, TooltipPopupComponent.ACTIVE_CLASS, false);
    this.renderer.setElementStyle(this.elementRef.nativeElement, 'display', 'none');
  }
}
