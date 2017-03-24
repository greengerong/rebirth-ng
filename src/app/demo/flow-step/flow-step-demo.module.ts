import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlowStepDemoComponent } from './flow-step-demo.component';
import { RebirthNGModule } from '../../exports/rebirth-ng.module';

@NgModule({
  imports: [CommonModule, RebirthNGModule],
  exports: [FlowStepDemoComponent],
  declarations: [FlowStepDemoComponent],
  providers: [],
  entryComponents: [FlowStepDemoComponent]
})
export class FlowStepDemoModule {
}
