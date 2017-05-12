/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { FileUploadComponent } from './file-upload.component';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { AlertBoxModule } from '../alert-box/alert-box.module';
import { DraggableModule } from '../draggable/draggable.module';
import { FileUploadPreviewComponent } from './file-upload-preview.component';
import {
  UploadFileTmplComponent, UploadPreviewTmplComponent,
  UploadToolbarTmplComponent
} from './file-upload-tmpl.directive';

describe('FileUpload', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        HttpModule,
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
