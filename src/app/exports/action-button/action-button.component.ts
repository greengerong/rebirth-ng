import {
  Component, OnInit, Input, EventEmitter, ChangeDetectionStrategy, HostListener, Output,
  TemplateRef
} from '@angular/core';
import { ActionItem } from './action-item.model';

@Component({
  selector: 're-action-button',
  templateUrl: './action-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActionButtonComponent {
  @Input() type: ButtonType = 'default';
  @Input() direction: DropDirection = 'down';
  @Input() icon: string;
  @Input() btnSize: ButtonSize;
  @Input() buttonText: string;
  @Input() cssClass: string;
  @Input() isOpen = false;
  @Input() actions: ActionItem[];
  @Input() disabled = false;
  @Input() buttonTemplate: TemplateRef<any>;
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
    if (!item.disabled) {
      this.close();
      this.actionClick.emit(item);
    }
  }
}
