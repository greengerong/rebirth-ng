import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 're-panel-body,re-accordion-body',
  template: '<ng-content></ng-content>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PanelBodyComponent {

}
