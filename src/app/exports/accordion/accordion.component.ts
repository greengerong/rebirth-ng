import { Component, ContentChildren, QueryList, AfterContentInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { PanelComponent } from '../panel/panel.component';

@Component({
  selector: 're-accordion',
  templateUrl: './accordion.component.html',
  exportAs: 'accordion',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccordionComponent implements AfterContentInit {
  @Input() type: 'default'| 'success' | 'info' | 'warning' | 'danger';
  @ContentChildren(PanelComponent) panels: QueryList<PanelComponent>;
  @Input() keepOneItem = true;

  constructor() {
  }

  ngAfterContentInit(): void {
    this.panels.forEach(panel => {
      panel.allowCollapse = true;
      panel.isCollapsed = true;
      if (this.type) {
        panel.type = this.type;
      }
      if (this.keepOneItem) {
        panel.collapse.subscribe(collapse => {
          if (!collapse) {
            this.keepOnePanelOpen(panel);
          }
        });
      }
    });
  }

  toggle(id) {
    const panel = this.panels.find(item => item.id === id);
    panel.onCollapse();
  }


  private keepOnePanelOpen(panel) {
    this.panels.forEach(item => {
      if (item !== panel) {
        item.isCollapsed = true;
      }
    });
  }
}
