import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioGroupDemoComponent } from './radio-group-demo.component';
import { RebirthNGModule } from 'rebirth-ng';
import { FormsModule, Validators } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RebirthNGModule
  ],
  exports: [
    RadioGroupDemoComponent
  ],
  declarations: [RadioGroupDemoComponent],
  providers: [],
  entryComponents: [RadioGroupDemoComponent]
})
export class RadioGroupDemoModule {
}
