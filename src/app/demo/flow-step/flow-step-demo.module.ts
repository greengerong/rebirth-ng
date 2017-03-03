import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlowStepDemoComponent } from './flow-step-demo.component';
import { RebirthUIModule } from '../../exports/rebirth-ui.module';

@NgModule({
  imports: [CommonModule, RebirthUIModule],
  exports: [FlowStepDemoComponent],
  declarations: [FlowStepDemoComponent],
  providers: [],
  entryComponents: [FlowStepDemoComponent]
})
export class FlowStepDemoModule {
}
