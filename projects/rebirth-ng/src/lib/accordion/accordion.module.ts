import { NgModule } from '@angular/core';

import { AccordionComponent } from './accordion.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [AccordionComponent],
  declarations: [AccordionComponent],
  providers: [],
})
export class AccordionModule {
}
