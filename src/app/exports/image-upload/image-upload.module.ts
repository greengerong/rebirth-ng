import { NgModule } from '@angular/core';

import { ImageUploadComponent } from './image-upload.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [],
  declarations: [
    ImageUploadComponent
  ],
  exports: [
    ImageUploadComponent
  ],
})
export class ImageUploadModule {
}
