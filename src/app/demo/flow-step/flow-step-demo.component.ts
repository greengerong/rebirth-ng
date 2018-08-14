import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FlowStep } from 'rebirth-ng';

@Component({
  selector: 're-flow-step-demo',
  templateUrl: './flow-step-demo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlowStepDemoComponent {
  active = 0;
  steps: FlowStep[] = [
    {
      title: 'Submit order',
      icon: 'glyphicon glyphicon-shopping-cart',
      description: 'Step 1 description'
    },
    {
      title: 'Payment',
      icon: 'glyphicon glyphicon-yen',
      description: 'Step 2 description'
    },
    {
      title: 'Posting',
      icon: 'glyphicon glyphicon-plane',
      description: 'Posting ....'
    },
    {
      title: 'Sign',
      icon: 'glyphicon glyphicon-list-alt',
      description: 'Step 4 description'
    },
    {
      title: 'Completed',
      icon: 'glyphicon glyphicon-ok',
      description: 'Step 5 description'
    }
  ];
}
