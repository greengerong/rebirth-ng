import { Component } from '@angular/core';

@Component({
  selector: 're-panel-header,[re-panel-header],re-accordion-header,[re-accordion-header]',
  template: '<ng-content></ng-content>',
  host: {
    '[style.display]': '"block"'
  }
})
export class PanelHeaderComponent {

}
