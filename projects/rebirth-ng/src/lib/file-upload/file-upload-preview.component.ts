import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { SelectFileModel } from './file-upload.model';

@Component({
  selector: 're-file-upload-preview',
  templateUrl: './file-upload-preview.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: 'fileUploadPreview'
})
export class FileUploadPreviewComponent {

  @Input() imgPreview: boolean;
  @Input() previewWidth: string;
  @Input() uploaded: boolean;
  @Input() disabled: boolean;
  @Input() selectFiles: SelectFileModel[] = [];
  @Output() removeFile = new EventEmitter<SelectFileModel>();

  onRemoveFile(fileItem) {
    if (!this.disabled) {
      this.removeFile.emit(fileItem);
    }
  }
}
