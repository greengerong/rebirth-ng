import { Directive, Input, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[reAutoFocus]',
})
export class AutoFocusDirective implements AfterViewInit {

  @Input('reAutoFocus') autoFocus: boolean;

  constructor(private  elementRef: ElementRef) {
  }

  ngAfterViewInit(): void {
    if (this.autoFocus && this.elementRef.nativeElement.focus) {
      this.elementRef.nativeElement.focus();
    }
  }
}
