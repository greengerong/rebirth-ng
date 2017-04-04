import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadDemoComponent } from './file-upload-demo.component';
import { RebirthNGModule } from '../../exports';


@NgModule({
  imports: [
    CommonModule,
    RebirthNGModule
  ],
  exports: [
    FileUploadDemoComponent
  ],
  declarations: [FileUploadDemoComponent],
  providers: [],
  entryComponents: [FileUploadDemoComponent]
})
export class FileUploadDemoModule {
}
