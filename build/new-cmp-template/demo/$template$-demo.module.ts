import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { <%= componentName %>DemoComponent } from './<%= componentSelector %>-demo.component';
import { RebirthUIModule } from '../../exports/rebirth-ui.module';


@NgModule({
  imports: [
    CommonModule,
    RebirthUIModule
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
