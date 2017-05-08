import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxGroupDemoComponent } from './checkbox-group-demo.component';
import { RebirthNGModule } from '../../exports';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RebirthNGModule
  ],
  exports: [
    CheckboxGroupDemoComponent
  ],
  declarations: [CheckboxGroupDemoComponent],
  providers: [],
  entryComponents: [CheckboxGroupDemoComponent]
})
export class CheckboxGroupDemoModule {
}
