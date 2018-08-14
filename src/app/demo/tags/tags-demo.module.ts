import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagsDemoComponent } from './tags-demo.component';
import { RebirthNGModule } from 'rebirth-ng';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    RebirthNGModule,
    FormsModule
  ],
  exports: [
    TagsDemoComponent
  ],
  declarations: [TagsDemoComponent],
  providers: [],
  entryComponents: [TagsDemoComponent]
})
export class TagsDemoModule {
}
