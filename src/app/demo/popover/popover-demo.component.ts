import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 're-popover-demo',
  templateUrl: './popover-demo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PopoverDemoComponent {
  name = 'greengerong';

}
