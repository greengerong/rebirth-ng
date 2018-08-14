import { Component } from '@angular/core';

@Component({
  selector: 're-panel-body,[re-panel-body],re-accordion-body,[re-accordion-body]',
  template: '<ng-content></ng-content>',
  host: {
    '[style.display]': '"block"'
  }
})
export class PanelBodyComponent {

}
