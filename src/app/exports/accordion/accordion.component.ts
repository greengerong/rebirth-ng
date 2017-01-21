import {
  Component, Input, ChangeDetectionStrategy,
  forwardRef
} from '@angular/core';
import { PanelComponent, PanelGroup } from '../panel';

@Component({
  selector: 're-accordion',
  templateUrl: './accordion.component.html',
  exportAs: 'accordion',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: PanelGroup, useExisting: forwardRef(() => AccordionComponent) }],
})
export class AccordionComponent extends PanelGroup {
  @Input() keepOneItem = true;

  constructor() {
    super();
  }

  protected initPanel(panel: PanelComponent) {
    panel.allowCollapse = true;
    panel.isCollapsed = true;
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
