import { Component } from '@angular/core';

@Component({
  selector: 're-panel-demo',
  templateUrl: './panel-demo.component.html'
})
export class PanelDemoComponent {

  close(type) {
    console.log(`Panel ${type} closing!`);
  }
}
