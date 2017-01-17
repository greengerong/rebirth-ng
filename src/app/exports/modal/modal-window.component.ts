import {
  Component, OnInit, Input, ViewChild, OnDestroy, HostListener, EventEmitter, Output,
  ChangeDetectionStrategy, ElementRef,
} from '@angular/core';
import { ModalContentComponent } from './modal-content.component';
import { ModalOptions } from './modal-options.model';
import { ModalDismissReasons } from './modal-dismiss-reasons';

@Component({
  selector: 're-modal',
  templateUrl: './modal-window.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalWindowComponent implements OnInit, OnDestroy {
  @Input() isOpen: boolean = false;
  @ViewChild(ModalContentComponent) modalContent: ModalContentComponent;
  @Output() dismiss = new EventEmitter<any>();
  @Input() modalOptions: ModalOptions;
  @ViewChild('modalBackdrop') modalBackdrop: ElementRef;
  instanceCount = 0;

  constructor(private elementRef: ElementRef) {

  }

  open() {
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
  }

  // @HostListener('click', ['$event'])
  // onBackdropClick($event: Event) {
  //   console.log(this.modalBackdrop.nativeElement === $event.target, $event.target, this.modalBackdrop.nativeElement);
  //   if (this.modalOptions.backdrop !== false && this.modalBackdrop.nativeElement === $event.target) {
  //     $event.stopPropagation();
  //     this.dismiss.error(ModalDismissReasons.BACKDROP_CLICK);
  //   }
  // }

  @HostListener('keyup.esc', ['$event'])
  onEscKeyUp($event: KeyboardEvent) {
    if (this.modalOptions.keyboard !== false) {
      $event.stopPropagation();
      this.dismiss.error(ModalDismissReasons.ESC_KEY);
    }
  }

  addContent<T>(options: ModalOptions): EventEmitter<T> {
    this.modalOptions = options;
    this.modalContent.addContent(options, this.dismiss);
    return this.dismiss;
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
  }
}
