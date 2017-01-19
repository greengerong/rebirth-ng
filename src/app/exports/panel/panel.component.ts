import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 're-panel',
  templateUrl: './panel.component.html'
})
export class PanelComponent {
  @Input() type: 'success' | 'info' | 'warning' | 'danger' = 'info';
  @Input() canClose = false;
  @Output() close = new EventEmitter<any>();

  constructor() {
  }

  onClose() {
    this.close.emit(this);
  }

}
