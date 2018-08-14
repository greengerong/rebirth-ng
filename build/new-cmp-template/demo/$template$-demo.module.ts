import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { <%= componentName %>DemoComponent } from './<%= componentSelector %>-demo.component';
import { RebirthNGModule } from 'rebirth-ng';


@NgModule({
  imports: [
    CommonModule,
    RebirthNGModule
  ],
  exports: [
    <%= componentName %>DemoComponent
  ],
  declarations: [<%= componentName %>DemoComponent],
  providers: [],
  entryComponents: [<%= componentName %>DemoComponent]
})
export class <%= componentName %>DemoModule {
}
