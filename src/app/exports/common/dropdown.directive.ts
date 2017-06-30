import { Directive, HostListener, Output, Input, EventEmitter, Renderer2, ElementRef, } from '@angular/core';

@Directive({
  selector: '[reDropdown]',
  host: {
    '[class.dropdown]': 'direction !== "up"',
    '[class.dropup]': 'direction === "up"'
  },
  exportAs: 'dropdown'
})
export class DropdownDirective {
  active = false;
  @Output() dropdownStatusChange = new EventEmitter();
  @Input() activeCss = 'open';
  @Input() direction: 'down' | 'up';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick($event) {
    if (!this.elementRef.nativeElement.contains($event.target)) {
      this.active = false;
      this.updateHostStatus();
    }
  }

  @HostListener('click', ['$event'])
  onHostClick() {
    this.toggle();
  }

  toggle() {
    this.active = !this.active;
    this.updateHostStatus();
  }

  updateHostStatus() {
    this.dropdownStatusChange.emit(this.active);
    if (this.active) {
      this.renderer.addClass(this.elementRef.nativeElement, this.activeCss);
      return;
    }
    this.renderer.removeClass(this.elementRef.nativeElement, this.activeCss);
  }
}
