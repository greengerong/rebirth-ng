import {
  Component,
  ChangeDetectionStrategy,
  Renderer2,
  ChangeDetectorRef,
  Optional,
  forwardRef
} from '@angular/core';
import { RebirthNGConfig } from '../rebirth-ng.config';
import { HttpClient } from '@angular/common/http';
import { FileUpload } from './file-upload';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 're-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: 'fileUpload',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => FileUploadComponent),
    multi: true
  }]
})
export class FileUploadComponent extends FileUpload {

  constructor(rebirthNGConfig: RebirthNGConfig,
              renderer: Renderer2,
              @Optional()  http: HttpClient,
              changeDetectorRef: ChangeDetectorRef) {
    super(rebirthNGConfig, renderer, http, changeDetectorRef);

  }
}
