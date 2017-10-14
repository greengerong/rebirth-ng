import { NgModule } from '@angular/core';

import { FileUploadComponent } from './file-upload.component';
import { CommonModule } from '@angular/common';
import { FileUploadPreviewComponent } from './file-upload-preview.component';
import { AlertBoxModule } from '../alert-box/alert-box.module';
import { DraggableModule } from '../draggable/draggable.module';
import {
  UploadToolbarTmplComponent,
  UploadPreviewTmplComponent,
  UploadFileTmplComponent
} from './file-upload-tmpl.directive';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    AlertBoxModule,
    DraggableModule
  ],
  providers: [],
  declarations: [
    FileUploadComponent,
    FileUploadPreviewComponent,
    UploadToolbarTmplComponent,
    UploadPreviewTmplComponent,
    UploadFileTmplComponent
  ],
  exports: [
    FileUploadComponent,
    FileUploadPreviewComponent,
    UploadToolbarTmplComponent,
    UploadPreviewTmplComponent,
    UploadFileTmplComponent
  ],
})
export class FileUploadModule {
}
