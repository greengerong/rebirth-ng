import { Component, Input, EventEmitter, HostListener, Output, TemplateRef } from '@angular/core';
import { ActionItem } from './action-item.model';
import { stopPropagationIfExist } from '../utils/dom-utils';
import { AnimationEvent } from '@angular/animations';
import { SCALE_ANIMATIONS } from '../utils/animation-utils';

@Component({
  selector: 're-action-button',
  templateUrl: './action-button.component.html',
  exportAs: 'actionButton',
  animations: SCALE_ANIMATIONS
})
export class ActionButtonComponent {
  @Input() type: 'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger' = 'default';
  @Input() direction: 'down' | 'up' = 'down';
  @Input() icon: string;
  @Input() btnSize: 'lg' | 'sm' | 'xs';
  @Input() buttonText: string;
  @Input() cssClass: string;
  @Input() actions: ActionItem[];
  @Input() disabled = false;
  @Input() buttonTemplate: TemplateRef<any>;
  @Output() actionClick = new EventEmitter<ActionItem>();
  @Output() openStatusChange = new EventEmitter<boolean>();
  animateState = 'initial';
  isOpen = false;

  toggle($event?: MouseEvent) {
    stopPropagationIfExist($event);
    if (!this.isOpen) {
      this.show();
    } else {
      this.hide();
    }
    this.openStatusChange.emit(this.isOpen);
  }

  afterVisibilityAnimation(e: AnimationEvent) {
    if (e.toState === 'hidden' && this.isOpen) {
      this.isOpen = false;
    }
  }

  @HostListener('document:click', ['$event'])
  close($event?: MouseEvent) {
    if (this.isOpen) {
      this.hide();
      this.openStatusChange.emit(this.isOpen);
    }
  }

  onActionClick(item: ActionItem) {
    if (!item.disabled) {
      this.close();
      this.actionClick.emit(item);
    }
  }

  private show() {
    this.isOpen = true;
    this.animateState = 'visible';
  }

  private hide() {
    this.animateState = 'hidden';
  }
}
