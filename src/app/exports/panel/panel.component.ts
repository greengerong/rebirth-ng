import { Component, Input, Output, EventEmitter, ContentChild } from '@angular/core';
import { PanelHeaderComponent } from './panel-header.component';
import { PanelBodyComponent } from './panel-body.component';

@Component({
  moduleId: module.id,
  selector: 're-panel,re-accordion-item',
  templateUrl: './panel.component.html'
})
export class PanelComponent {
  @Input() type: 'default'| 'success' | 'info' | 'warning' | 'danger' = 'default';
  @Input() canClose = false;
  @Input() allowCollapse = false;
  @Input() isCollapsed = false;
  @Output() close = new EventEmitter<any>();
  @Output() collapse = new EventEmitter<any>();

  @ContentChild(PanelHeaderComponent) panelHeader: PanelHeaderComponent;
  @ContentChild(PanelBodyComponent) panelBody: PanelBodyComponent;

  constructor() {
  }

  onClose($event: Event) {
    $event.stopPropagation();
    this.close.emit(this);
  }

  onCollapse() {
    if (this.allowCollapse) {
      this.isCollapsed = !this.isCollapsed;
      this.collapse.emit(this.isCollapsed);
    }
  }
}
