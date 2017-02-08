import { Input, ElementRef, Renderer, TemplateRef, HostListener } from '@angular/core';

export class TooltipPopup {
  static ACTIVE_CLASS = 'in';
  @Input() placement: 'top' | 'bottom' | 'left' | 'right' = 'top';
  @Input() content: string | TemplateRef<any>;
  @Input() context: any;
  @Input() cssClass: string;
  isOpen: boolean;

  constructor(protected elementRef: ElementRef, protected renderer: Renderer) {
  }

  @HostListener('click', ['$event'])
  onDocumentClick($event: Event) {
    $event.stopPropagation();
  }

  show() {
    this.isOpen = true;
    this.renderer.setElementClass(this.elementRef.nativeElement, TooltipPopup.ACTIVE_CLASS, true);
    this.renderer.setElementStyle(this.elementRef.nativeElement, 'display', 'block');
    if (this.cssClass) {
      this.renderer.setElementClass(this.elementRef.nativeElement, this.cssClass, true);
    }
  }

  hide() {
    this.isOpen = false;
    this.renderer.setElementClass(this.elementRef.nativeElement, TooltipPopup.ACTIVE_CLASS, false);
    this.renderer.setElementStyle(this.elementRef.nativeElement, 'display', 'none');
    if (this.cssClass) {
      this.renderer.setElementClass(this.elementRef.nativeElement, this.cssClass, false);
    }
  }
}
