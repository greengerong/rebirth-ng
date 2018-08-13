import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 're-switch-demo',
  templateUrl: './switch-demo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SwitchDemoComponent {
  checked = true;
  disabled = false;

}
