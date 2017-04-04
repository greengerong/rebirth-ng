import { NgModule } from '@angular/core';

import { FileUploadComponent } from './file-upload.component';
import { CommonModule } from '@angular/common';
import { FileUploadPreviewComponent } from './file-upload-preview.component';
import { AlertBoxModule } from '../alert-box/alert-box.module';
import { DraggableModule } from '../draggable/draggable.module';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    AlertBoxModule,
    DraggableModule
  ],
  providers: [],
  declarations: [
    FileUploadComponent,
    FileUploadPreviewComponent
  ],
  exports: [
    FileUploadComponent,
    FileUploadPreviewComponent
  ],
})
export class FileUploadModule {
}
