import { NgModule } from '@angular/core';

import { TagsComponent } from './tags.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [],
  declarations: [
    TagsComponent
  ],
  exports: [
    TagsComponent
  ],
})
export class TagsModule {
}
