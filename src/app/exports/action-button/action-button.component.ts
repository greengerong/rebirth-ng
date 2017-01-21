import { Component, OnInit, Input, EventEmitter, ChangeDetectionStrategy, HostListener, Output } from '@angular/core';
import { ActionItem } from './action-item.model';

@Component({
  selector: 're-action-button',
  templateUrl: './action-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActionButtonComponent {
  @Input() type: 'default'|'primary'| 'success' | 'info' | 'warning' | 'danger' = 'primary';
  @Input() direction: 'down'| 'up' = 'down';
  @Input() buttonText: string;
  @Input() isOpen = false;
  @Input() actions: ActionItem[];
  @Input() disabled = false;
  @Output() actionClick = new EventEmitter<ActionItem>();
  @Output() openStatusChange = new EventEmitter<boolean>();

  toggle($event?: MouseEvent) {
    if ($event) {
      $event.stopPropagation();
    }
    this.isOpen = !this.isOpen;
    this.openStatusChange.emit(this.isOpen);
  }

  @HostListener('document:click', ['$event'])
  close($event?: MouseEvent) {
    this.isOpen = false;
    this.openStatusChange.emit(this.isOpen);
  }

  onActionClick(item: ActionItem) {
    this.close();
    this.actionClick.emit(item);
  }
}
