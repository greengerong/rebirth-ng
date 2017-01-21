import { PanelComponent } from './panel.component';
import { Input } from '@angular/core';

export abstract class PanelGroup {
  @Input() type: 'default'| 'success' | 'info' | 'warning' | 'danger';
  @Input() cssClass: string;
  panels: PanelComponent[] = [];

  $addItem(panel: PanelComponent) {
    this.$removeItem(panel);
    if (this.type) {
      panel.type = this.type;
    }
    panel.cssClass = this.cssClass;
    this.initPanel(panel);
    this.panels.push(panel);
  }

  $removeItemById(id) {
    const index = this.panels.findIndex(item => item.id === id);
    this.removeItemByIndex(index);
  }

  $removeItem(panel: PanelComponent) {
    if (panel) {
      const index = this.panels.findIndex(item => item === panel);
      this.removeItemByIndex(index);
    }
  }

  private removeItemByIndex(index: number) {
    if (index !== -1) {
      this.panels.splice(index, 1);
    }
  }

  protected abstract initPanel(panel: PanelComponent) ;
}
