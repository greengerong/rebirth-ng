import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadDemoComponent } from './file-upload-demo.component';
import { RebirthNGModule } from 'rebirth-ng';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
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
