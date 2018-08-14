import { Component, Input, forwardRef, Output, EventEmitter } from '@angular/core';
import { PanelComponent } from '../panel/panel.component';
import { PanelGroup } from '../panel/panel-group.model';
import { RebirthNGConfig } from '../rebirth-ng.config';

@Component({
  selector: 're-accordion',
  templateUrl: './accordion.component.html',
  exportAs: 'accordion',
  providers: [{ provide: PanelGroup, useExisting: forwardRef(() => AccordionComponent) }],
})
export class AccordionComponent extends PanelGroup {
  @Input() keepOneItem: boolean;
  @Input() closable: boolean;
  @Output() close = new EventEmitter<PanelComponent>();

  constructor(rebirthNGConfig: RebirthNGConfig) {
    super();
    this.keepOneItem = rebirthNGConfig.accordion.keepOneItem;
    this.closable = rebirthNGConfig.accordion.closable;
    this.type = <any>rebirthNGConfig.accordion.type;
  }

  protected initPanel(panel: PanelComponent) {
    panel.collapsable = true;
    panel.isCollapsed = true;
    panel.closable = this.closable;
    panel.close.subscribe(item => this.close.emit(item));
    panel.collapse.subscribe(collapse => {
      if (!collapse) {
        this.keepOnePanelOpen(panel);
      }
    });
  }

  toggleById(id) {
    const panel = this.panels.find(item => item.id === id);
    this.toggle(panel);
  }

  toggle(panel: PanelComponent) {
    if (panel) {
      panel.onCollapse();
    }
  }


  private keepOnePanelOpen(panel) {
    if (this.keepOneItem) {
      this.panels.forEach(item => {
        if (item !== panel) {
          item.isCollapsed = true;
        }
      });
    }
  }
}
