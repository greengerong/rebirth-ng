import { NgModule } from '@angular/core';

import { AccordionDemoComponent } from './accordion-demo.component';
import { CommonModule } from '@angular/common';
import { RebirthUIModule } from '../../exports';

@NgModule({
  imports: [
    CommonModule,
    RebirthUIModule
  ],
  exports: [
    AccordionDemoComponent
  ],
  declarations: [AccordionDemoComponent],
  providers: [],
  entryComponents: [AccordionDemoComponent]
})
export class AccordionDemoModule {
}
