import {
  Component, ChangeDetectionStrategy, ViewChild, ElementRef, Input, AfterViewInit,
  Renderer2, Output, EventEmitter
} from '@angular/core';
import { SelectFileModel } from './file-upload.model';
import { readFileAsDataURL } from '../utils/dom-utils';

@Component({
  selector: 're-file-upload-preview',
  templateUrl: './file-upload-preview.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: 'fileUpload'
})
export class FileUploadPreviewComponent {

  @Input() selectFiles: SelectFileModel[] = [];

}
