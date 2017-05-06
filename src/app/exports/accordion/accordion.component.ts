import { Component, Input, forwardRef, Output, EventEmitter } from '@angular/core';
import { PanelComponent, PanelGroup } from '../panel';
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

  constructor(rebirthUIConfig: RebirthNGConfig) {
    super();
    this.keepOneItem = rebirthUIConfig.accordion.keepOneItem;
    this.closable = rebirthUIConfig.accordion.closable;
    this.type = <any>rebirthUIConfig.accordion.type;
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
