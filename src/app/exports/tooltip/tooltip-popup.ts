import { Input, ElementRef, Renderer2, TemplateRef, HostListener, ChangeDetectorRef } from '@angular/core';
import { stopPropagationIfExist } from '../utils/dom-utils';
import { AnimationEvent } from '@angular/animations';

export class TooltipPopup {
  static ACTIVE_CLASS = 'in';
  @Input() placement: 'top' | 'top-left' | 'top-right' | 'bottom' | 'bottom-left' | 'bottom-right' | 'left' | 'right' = 'top';
  @Input() content: string | TemplateRef<any>;
  @Input() context: any;
  @Input() cssClass: string;
  isOpen: boolean;
  animateState = 'initial';

  constructor(protected elementRef: ElementRef, protected renderer: Renderer2, protected changeDetectorRef: ChangeDetectorRef) {
  }

  @HostListener('click', ['$event'])
  onHostClick($event: Event) {
    stopPropagationIfExist($event);
  }

  show() {
    if (!this.isOpen) {
      this.isOpen = true;
      this.renderer.addClass(this.elementRef.nativeElement, TooltipPopup.ACTIVE_CLASS);
      this.renderer.setStyle(this.elementRef.nativeElement, 'display', 'block');
      this.animateState = 'visible';
      if (this.cssClass) {
        this.renderer.addClass(this.elementRef.nativeElement, this.cssClass);
      }
      this.changeDetectorRef.markForCheck();
    }
  }

  hide() {
    if (this.isOpen) {
      this.isOpen = false;
      this.animateState = 'hidden';
      if (this.cssClass) {
        this.renderer.removeClass(this.elementRef.nativeElement, this.cssClass);
      }
    }
  }

  afterVisibilityAnimation(e: AnimationEvent) {
    if (e.toState === 'hidden' && !this.isOpen) {
      this.renderer.removeClass(this.elementRef.nativeElement, TooltipPopup.ACTIVE_CLASS);
      this.renderer.setStyle(this.elementRef.nativeElement, 'display', 'none');
    }
  }

  isTemplateRef(obj) {
    return obj != null && obj instanceof TemplateRef && obj.elementRef;
  }
}
