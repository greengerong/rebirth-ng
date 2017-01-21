import { PanelComponent } from './panel.component';
import { Input } from '@angular/core';

export abstract class PanelGroup {
  @Input() type: 'default'| 'success' | 'info' | 'warning' | 'danger';
  panels: PanelComponent[] = [];

  addItem(panel: PanelComponent) {
    const index = this.panels.findIndex(item => item.id === panel.id);
    if (index !== -1) {
      this.panels.splice(index, 1);
    }
    if (this.type) {
      panel.type = this.type;
    }
    this.initPanel(panel);
    this.panels.push(panel);
  }

  protected abstract initPanel(panel: PanelComponent) ;
}
