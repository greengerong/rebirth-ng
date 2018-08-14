import { NgModule } from '@angular/core';

import { AccordionDemoComponent } from './accordion-demo.component';
import { CommonModule } from '@angular/common';
import { RebirthNGModule } from 'rebirth-ng';

@NgModule({
  imports: [
    CommonModule,
    RebirthNGModule
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
