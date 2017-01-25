import {
  Component,
  Renderer,
  ElementRef,
  Input,
  TemplateRef,
  HostListener
} from '@angular/core';

@Component({
  selector: 're-popover-popup',
  templateUrl: './popover-popup.component.html',
  host: { '[class]': '"popover fade  " + placement', 'style.display': 'none', 'role': 'tooltip' }
})
export class PopoverPopupComponent {
  static ACTIVE_CLASS = 'in';
  @Input() placement: 'top' | 'bottom' | 'left' | 'right' = 'top';
  @Input() title: string | TemplateRef<any>;
  @Input() content: string | TemplateRef<any>;
  @Input() context: any;

  constructor(private elementRef: ElementRef, private renderer: Renderer) {
  }

  @HostListener('click', ['$event'])
  onDocumentClick($event: Event) {
    $event.stopPropagation();
  }

  show() {
    this.renderer.setElementClass(this.elementRef.nativeElement, PopoverPopupComponent.ACTIVE_CLASS, true);
    this.renderer.setElementStyle(this.elementRef.nativeElement, 'display', 'block');
  }

  hide() {
    this.renderer.setElementClass(this.elementRef.nativeElement, PopoverPopupComponent.ACTIVE_CLASS, false);
    this.renderer.setElementStyle(this.elementRef.nativeElement, 'display', 'none');
  }

}
