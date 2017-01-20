import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 're-panel',
  templateUrl: './panel.component.html'
})
export class PanelComponent {
  @Input() type: 'default'| 'success' | 'info' | 'warning' | 'danger' = 'default';
  @Input() canClose = false;
  @Input() allowCollapse = false;
  @Input() isCollapsed = false;
  @Output() close = new EventEmitter<any>();
  @Output() collapse = new EventEmitter<any>();

  constructor() {
  }

  onClose() {
    this.close.emit(this);
  }

  onCollapse() {
    if (this.allowCollapse) {
      this.isCollapsed = !this.isCollapsed;
      this.collapse.emit(this.isCollapsed);
    }
  }
}
