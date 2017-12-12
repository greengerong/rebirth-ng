import { NgModule } from '@angular/core';

import { ImageUploadComponent } from './image-upload.component';
import { CommonModule } from '@angular/common';
import { AlertBoxModule } from '../alert-box/alert-box.module';
import { DraggableModule } from '../draggable/draggable.module';

@NgModule({
  imports: [
    CommonModule,
    AlertBoxModule,
    DraggableModule
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
