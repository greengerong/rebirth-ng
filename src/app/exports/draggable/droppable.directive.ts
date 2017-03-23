import { HostListener, EventEmitter, Output, Input, Directive } from '@angular/core';

@Directive({
  selector: '[reDroppable]',
})
export class DroppableDirective {

  @Input('reDroppable') group: string;

  // https://developer.mozilla.org/zh-CN/docs/Web/API/DataTransfer/dropEffect
  @Input() dropEffect: 'copy' | 'move' | 'link' | 'none' = 'move';

  @Output() onDragEnter: EventEmitter<any> = new EventEmitter();

  @Output() onDragLeave: EventEmitter<any> = new EventEmitter();

  @Output() onDrop: EventEmitter<any> = new EventEmitter();

  @Output() onDragOver: EventEmitter<any> = new EventEmitter();


  @HostListener('drop', ['$event'])
  drop($event) {
    if (this.isDropGroup($event)) {
      $event.preventDefault();
      this.onDrop.emit($event);
    }
  }

  @HostListener('dragenter', ['$event'])
  dragEnter($event) {
    $event.preventDefault();
    if (this.dropEffect) {
      $event.dataTransfer.dropEffect = this.dropEffect;
    }

    this.onDragEnter.emit($event);
  }

  @HostListener('dragleave', ['$event'])
  dragLeave($event) {
    $event.preventDefault();
    this.onDragLeave.emit($event);
  }

  @HostListener('dragover', ['$event'])
  dragOver($event) {
    $event.preventDefault();
    this.onDragOver.emit($event);
  }

  isDropGroup($event): boolean {
    const contextData = $event.dataTransfer.getData('text');
    if (contextData) {
      const draggableData = JSON.parse(contextData);
      return this.group === draggableData.group;
    }
  }
}
