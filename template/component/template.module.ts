import { NgModule } from '@angular/core';

import { <%= compMsg %>Component } from './<%= comp %>.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [],
  declarations: [
    <%= compMsg %>Component
  ],
  exports: [
    <%= compMsg %>Component
  ],
})
export class <%= compMsg %>Module {
}