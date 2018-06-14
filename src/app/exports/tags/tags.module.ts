import { NgModule } from '@angular/core';

import { TagsComponent } from './tags.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RebirthCommonModule } from '../common';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RebirthCommonModule
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
