import { Input, ElementRef, Renderer, TemplateRef, HostListener } from '@angular/core';

export class TooltipPopup {
  static ACTIVE_CLASS = 'in';
  @Input() placement: 'top' | 'bottom' | 'left' | 'right' = 'top';
  @Input() content: string | TemplateRef<any>;
  @Input() context: any;

  constructor(protected elementRef: ElementRef, protected renderer: Renderer) {
  }

  @HostListener('click', ['$event'])
  onDocumentClick($event: Event) {
    $event.stopPropagation();
  }

  show() {
    this.renderer.setElementClass(this.elementRef.nativeElement, TooltipPopup.ACTIVE_CLASS, true);
    this.renderer.setElementStyle(this.elementRef.nativeElement, 'display', 'block');
  }

  hide() {
    this.renderer.setElementClass(this.elementRef.nativeElement, TooltipPopup.ACTIVE_CLASS, false);
    this.renderer.setElementStyle(this.elementRef.nativeElement, 'display', 'none');
  }
}
