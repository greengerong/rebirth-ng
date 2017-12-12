import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageUploadDemoComponent } from './image-upload-demo.component';
import { RebirthNGModule } from '../../exports';


@NgModule({
  imports: [
    CommonModule,
    RebirthNGModule
  ],
  exports: [
    ImageUploadDemoComponent
  ],
  declarations: [ImageUploadDemoComponent],
  providers: [],
  entryComponents: [ImageUploadDemoComponent]
})
export class ImageUploadDemoModule {
}
