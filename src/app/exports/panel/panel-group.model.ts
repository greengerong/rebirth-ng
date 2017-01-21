import { PanelComponent } from './panel.component';
import { Input } from '@angular/core';

export abstract class PanelGroup {
  @Input() type: 'default'| 'success' | 'info' | 'warning' | 'danger';
  panels: PanelComponent[] = [];

  addItem(panel: PanelComponent) {
    if (this.type) {
      panel.type = this.type;
    }
    this.initPanel(panel);
    this.panels.push(panel);
  }

  protected abstract initPanel(panel: PanelComponent) ;
}
