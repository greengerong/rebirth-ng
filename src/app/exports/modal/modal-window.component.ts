import {
  Component,
  Input,
  ViewChild,
  HostListener,
  EventEmitter,
  ElementRef,
  Output
} from '@angular/core';
import { ModalContentComponent } from './modal-content.component';
import { ModalOptions } from './modal-options.model';
import { ModalDismissReasons } from './modal-dismiss-reasons.model';
import { trigger, state, style, transition, animate } from '@angular/animations';
import 'rxjs/add/operator/filter';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 're-modal-window',
  templateUrl: './modal-window.component.html',
  host: {
    '[@flyInOut]': 'animateState',
    '(@flyInOut.start)': 'onAnimationStart($event)',
    '(@flyInOut.done)': 'onAnimationDone($event)'
  },
  animations: [
    trigger('flyInOut', [
      state('void', style({ top: '-100%', opacity: 0 })),
      state('in', style({ top: '10%', opacity: 1 })),
      transition('void => in', animate('0.2s ease-in-out')),
      transition('in => void', animate('0.2s ease-in-out')),
    ])
  ]
})
export class ModalWindowComponent {
  @Input() isOpen = false;
  @Input() instanceCount = 0;
  @Output() animationDone = new EventEmitter<any>();
  @ViewChild(ModalContentComponent) modalContent: ModalContentComponent;
  dismiss: EventEmitter<any>;
  modalOptions: ModalOptions;
  animateState: string;
  isInAnimationDone: boolean;

  constructor(private elementRef: ElementRef) {

  }

  open(): Observable<any> {
    this.isOpen = true;
    if (this.modalOptions.animation) {
      this.animateState = 'in';
    } else {
      setTimeout(() => this.onAnimationDone({ toState: 'in' }));
    }
    return this.animationDone
      .filter(event => event.toState === 'in');
  }

  close(): Observable<any> {
    this.isOpen = false;
    if (this.modalOptions.animation) {
      this.animateState = 'void';
    } else {
      setTimeout(() => this.onAnimationDone({ toState: 'void' }));
    }
    return this.animationDone
      .filter(event => event.toState === 'void');
  }

  onAnimationStart($event) {
    this.isInAnimationDone = true;
  }

  onAnimationDone($event) {
    console.log($event, 'onAnimationDone');
    this.isInAnimationDone = false;
    this.animationDone.emit($event);
  }

  @HostListener('click', ['$event'])
  onBackdropClick($event: Event) {
    if (!this.modalOptions.modal && !this.isInAnimationDone && this.elementRef.nativeElement === $event.target) {
      this.dismiss.error(ModalDismissReasons.BACKDROP_CLICK);
    }
  }

  @HostListener('keyup.esc', ['$event'])
  onEscKeyUp($event: KeyboardEvent) {
    if (this.modalOptions.keyboard !== false) {
      this.dismiss.error(ModalDismissReasons.ESC_KEY);
    }
  }

  addContent<T>(options: ModalOptions, dismiss: EventEmitter<T>): EventEmitter<T> {
    this.modalOptions = options;
    this.dismiss = dismiss;
    this.modalContent.addContent(options, this.dismiss);
    return this.dismiss;
  }
}
