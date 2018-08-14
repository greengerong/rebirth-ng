import { Component } from '@angular/core';
import { PanelComponent } from 'rebirth-ng';

@Component({
  selector: 're-accordion-demo',
  templateUrl: './accordion-demo.component.html'
})
export class AccordionDemoComponent {
  items = [
    { id: 1, title: 'Panel header 1', content: 'Panel header 1' },
    { id: 2, title: 'Panel header 2', content: 'Panel header 2' }
  ];

  onClose(panel: PanelComponent) {
    console.log(`Panel ${panel.id} will close!`, panel);
  }

  appendItems() {
    const len = this.items.length + 1;
    this.items.push({ id: len, title: `Panel header ${len}`, content: `Panel header ${len}` });
  }

  removeLastItem() {
    const len = this.items.length;
    this.items.splice(len - 1, 1);
  };
}
