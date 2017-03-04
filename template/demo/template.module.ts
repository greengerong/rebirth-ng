import { NgModule } from '@angular/core';

import { <%= compMsg %>DemoComponent } from './<%= comp %>.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    <%= compMsg %>DemoComponent
  ],
  declarations: [<%= compMsg %>DemoComponent],
  providers: [],
  entryComponents: [<%= compMsg %>DemoComponent]
})
export class <%= compMsg %>DemoModule {
}
