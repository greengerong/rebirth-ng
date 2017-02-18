import { Directive, HostListener, Output, Input, EventEmitter, Renderer, ElementRef, } from '@angular/core';

@Directive({
  selector: '[reDropdown]',
  host: { '[class]': '"drop" + (direction?  direction : "down")' },
  exportAs: 'dropdown'
})
export class DropdownDirective {
  active = false;
  @Output() dropdownStatusChange = new EventEmitter();
  @Input() activeCss = 'open';
  @Input() direction: DropDirection;

  constructor(private elementRef: ElementRef, private renderer: Renderer) {
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick() {
    this.active = false;
    this.updateHostStatus();
  }

  @HostListener('click', ['$event'])
  onHostClick($event: Event) {
    if (!this.active) {
      $event.stopPropagation();
    }
    this.toggle();
  }

  toggle() {
    this.active = !this.active;
    this.updateHostStatus();
  }

  updateHostStatus() {
    this.dropdownStatusChange.emit(this.active);
    this.renderer.setElementClass(this.elementRef.nativeElement, this.activeCss, this.active);
  }
}
