import { Component, ChangeDetectionStrategy, Optional, ChangeDetectorRef, Renderer2 } from '@angular/core';
import { FileUpload } from '../file-upload/file-upload';
import { RebirthNGConfig } from '../rebirth-ng.config';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 're-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: 'imageUpload'
})
export class ImageUploadComponent extends FileUpload {

  constructor(rebirthNGConfig: RebirthNGConfig,
              renderer: Renderer2,
              @Optional()  http: HttpClient,
              changeDetectorRef: ChangeDetectorRef) {
    super(rebirthNGConfig, renderer, http, changeDetectorRef);
  }
}
