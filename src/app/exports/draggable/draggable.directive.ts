import { HostListener, EventEmitter, Output, Input, Directive, ContentChild, ElementRef } from '@angular/core';


@Directive({
  selector: '[reDraggableHandle]'
})
export class DraggableHandleDirective {
  constructor(public elementRef: ElementRef) {
  }
}

@Directive({
  selector: '[reDraggable]',
  host: {
    '[draggable]': 'true'
  }
})
export class DraggableDirective {
  static DRAGGABLE_KEY = 'reDraggable';
  @Input('reDraggable') group: string;
  @Input() dragData: any;
  // https://developer.mozilla.org/zh-CN/docs/Web/API/DataTransfer/effectAllowed
  @Input() dragEffect: 'none' | 'copy' | 'copyLink' | 'copyMove' | 'link' | 'linkMove' | 'move'
    | 'all' | 'uninitialized' = 'move';

  @Output() beforeDrag: EventEmitter<any> = new EventEmitter();
  @Output() afterDrag: EventEmitter<any> = new EventEmitter();
  @Output() dragging: EventEmitter<any> = new EventEmitter();
  handle: any;
  @ContentChild(DraggableHandleDirective) draggableHandle: DraggableHandleDirective;

  @HostListener('dragstart', ['$event'])
  dragStart($event: DragEvent) {
    if (!this.draggableHandle || this.draggableHandle.elementRef.nativeElement === this.handle) {
      $event.dataTransfer.effectAllowed = this.dragEffect;
      $event.dataTransfer.setData(DraggableDirective.DRAGGABLE_KEY, JSON.stringify({
        group: this.group,
        data: this.dragData
      }));
      this.beforeDrag.emit($event);
      return;
    }
    $event.preventDefault();
  }

  @HostListener('drag', ['$event'])
  drag($event) {
    this.dragging.emit($event);
  }

  @HostListener('dragend', ['$event'])
  dragEnd($event) {
    this.afterDrag.emit($event);
  }

  @HostListener('mouseover', ['$event'])
  mouseover(event) {
    this.handle = event.target;
  }

  @HostListener('mouseleave', ['$event'])
  mouseleave(event) {
    this.handle = null;
  }

}
