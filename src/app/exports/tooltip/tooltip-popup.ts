import { Input, ElementRef, Renderer2, TemplateRef, HostListener } from '@angular/core';
import { stopPropagationIfExist } from '../utils/dom-utils';

export class TooltipPopup {
  static ACTIVE_CLASS = 'in';
  @Input() placement: 'top' | 'top-left' | 'top-right' | 'bottom' | 'bottom-left' | 'bottom-right' | 'left' | 'right' = 'top';
  @Input() content: string | TemplateRef<any>;
  @Input() context: any;
  @Input() cssClass: string;
  isOpen: boolean;

  constructor(protected elementRef: ElementRef, protected renderer: Renderer2) {
  }

  @HostListener('click', ['$event'])
  onDocumentClick($event: Event) {
    stopPropagationIfExist($event);
  }

  show() {
    this.isOpen = true;
    this.renderer.addClass(this.elementRef.nativeElement, TooltipPopup.ACTIVE_CLASS);
    this.renderer.setStyle(this.elementRef.nativeElement, 'display', 'block');
    if (this.cssClass) {
      this.renderer.addClass(this.elementRef.nativeElement, this.cssClass);
    }
  }

  hide() {
    this.isOpen = false;
    this.renderer.removeClass(this.elementRef.nativeElement, TooltipPopup.ACTIVE_CLASS);
    this.renderer.setStyle(this.elementRef.nativeElement, 'display', 'none');
    if (this.cssClass) {
      this.renderer.removeClass(this.elementRef.nativeElement, this.cssClass);
    }
  }

  isTemplateRef(obj) {
    return obj != null && obj instanceof TemplateRef && obj.elementRef;
  }
}
