import { NgModule } from '@angular/core';

import { <%= componentName %>Component } from './<%= componentSelector %>.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [],
  declarations: [
    <%= componentName %>Component
  ],
  exports: [
    <%= componentName %>Component
  ],
})
export class <%= componentName %>Module {
}
