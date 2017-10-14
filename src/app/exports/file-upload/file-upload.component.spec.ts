/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { FileUploadComponent } from './file-upload.component';
import { CommonModule } from '@angular/common';
import { AlertBoxModule } from '../alert-box/alert-box.module';
import { DraggableModule } from '../draggable/draggable.module';
import { FileUploadPreviewComponent } from './file-upload-preview.component';
import {
  UploadFileTmplComponent, UploadPreviewTmplComponent,
  UploadToolbarTmplComponent
} from './file-upload-tmpl.directive';
import { HttpClientModule } from '@angular/common/http';

describe('FileUpload', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
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
    });
    TestBed.compileComponents();
  });

  it('mock test', async(() => {
    expect(true).toBeTruthy();
  }));

});
