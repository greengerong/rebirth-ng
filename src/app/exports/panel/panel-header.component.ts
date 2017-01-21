import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 're-panel-header,re-accordion-header',
  template: '<ng-content></ng-content>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PanelHeaderComponent {
  
}
