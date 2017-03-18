import { Directive, Input, ElementRef, Renderer, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[reAutoFocus]',
})
export class AutoFocusDirective implements AfterViewInit {

  @Input('reAutoFocus') autoFocus: boolean;

  constructor(private  elementRef: ElementRef, private renderer: Renderer) {
  }

  ngAfterViewInit(): void {
    if (this.autoFocus) {
      this.renderer.invokeElementMethod(this.elementRef.nativeElement, 'focus');
    }
  }
}
