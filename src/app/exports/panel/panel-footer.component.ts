import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 're-panel-footer,[re-panel-footer],re-accordion-footer,[re-accordion-footer]',
  template: '<ng-content></ng-content>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PanelFooterComponent {

}
