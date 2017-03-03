import { Component, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';
import { FlowStep } from './flow-step.model';

@Component({
  selector: 're-flow-step',
  templateUrl: './flow-step.component.html',
  styleUrls: ['./flow-step.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlowStepComponent {
  @Input() type: 'dot' | 'arrow' = 'arrow';
  @Input() steps: FlowStep[];
  @Input() active: number;
  @Output() activeChange = new EventEmitter<number>();
  @Input() cssClass: string;

  constructor() {
  }

  stepClick(step, $index) {
    if ($index < this.active) {
      this.activeChange.emit($index);
    }
  }

}
