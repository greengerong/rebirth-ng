import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  ElementRef,
  Input,
  AfterViewInit,
  Renderer2,
  Output,
  EventEmitter,
  ChangeDetectorRef
} from '@angular/core';
import { SelectFileModel } from './file-upload.model';
import { readFileAsDataURL } from '../utils/dom-utils';
import { Http, Response, RequestOptions } from '@angular/http';
import { formatFileSize } from '../utils/lange-utils';

@Component({
  selector: 're-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: 'fileUpload'
})
export class FileUploadComponent implements AfterViewInit {

  @Input() accept: string;
  @Input() multiple: boolean;
  @Input() autoUpload: boolean;
  @Input() maxItems: number;
  @Input() maxFileSize: number;
  @Input() uploadUrl: string;
  @Input() uploadParamName: string = 'file';
  @Input() uploadRequestOptions: RequestOptions;
  @Input() imgPreview: boolean;
  @Input() previewWidth = '50px';
  @Input() cssClass: string;
  @Output() selectFilesChange = new EventEmitter<SelectFileModel[]>();
  @Output() fileUploadSuccess = new EventEmitter<any>();
  @Output() fileUploadError = new EventEmitter<any>();
  @ViewChild('file') fileInput: ElementRef;
  selectFiles: SelectFileModel[] = [];
  uploadFiles: SelectFileModel[] = [];
  errors: string[] = [];

  constructor(private renderer: Renderer2, private http: Http, private changeDetectorRef: ChangeDetectorRef) {

  }

  ngAfterViewInit(): void {
    if (this.accept) {
      this.renderer.setProperty(this.fileInput.nativeElement, 'accept', this.accept);
    }

    this.renderer.setProperty(this.fileInput.nativeElement, 'multiple', this.multiple);
  }

  isMoreThanMaxItems() {
    if (!this.multiple) {
      return this.selectFiles.length >= 1;
    }
    return this.maxItems && (this.selectFiles.length >= this.maxItems);
  }

  clearErrors() {
    this.errors = [];
  }

  onDropFiles($event) {
    $event.stopPropagation();
    $event.preventDefault();

    const files = $event.dataTransfer.files;
    if (files && files.length) {
      this.handleFileChoose(files);
    }
  }

  addNewFile(fileInput: HTMLInputElement, $event) {
    $event.stopPropagation();
    fileInput.click(); // simulate file input event
  }

  newFileChoose(fileInput: HTMLInputElement) {
    this.clearErrors();
    if (fileInput.files && fileInput.files.length) {
      this.handleFileChoose(fileInput.files);
    }
  }

  removeAllSelectedFiles() {
    this.selectFiles = [];
    this.clearErrors();
  }

  onRemoveFile(fileItem) {
    this.selectFiles = this.selectFiles.filter(item => item !== fileItem);
  }

  uploadAllFiles() {
    this.clearErrors();
    this.selectFiles.map(fileItem => {
      return this.uploadFile(fileItem);
    });
  }

  private uploadFile(fileItem) {
    const formData = new FormData();
    formData.append(this.uploadParamName, fileItem.file);
    return this.http.post(this.uploadUrl, formData, this.uploadRequestOptions)
      .map(res => res.json())
      .subscribe(
        (res: Response) => {
          fileItem.uploadResponse = res;
          this.selectFiles = this.selectFiles.filter(item => item !== fileItem);
          this.uploadFiles = [...this.uploadFiles, fileItem];
          this.fileUploadSuccess.emit(res);
          this.changeDetectorRef.markForCheck();
        },
        (error) => {
          this.errors.push(`${fileItem.file.name}: Upload error: ${error}`);
          this.fileUploadError.emit(error);
          this.changeDetectorRef.markForCheck();
        }
      );
  }

  private handleFileChoose(uploadFiles: FileList) {
    const files = this.validFiles(Array.from(uploadFiles));
    this.mapFileModel(files)
      .then(fileModels => {
        this.selectFiles = [...this.selectFiles, ...fileModels];
        this.selectFilesChange.emit(this.selectFiles);
        this.changeDetectorRef.markForCheck();
        return fileModels || [];
      })
      .then((fileModels) => {
        if (this.autoUpload) {
          return fileModels.map(fileItem => this.uploadFile(fileItem));
        }
      });
  }

  validFiles(files: File[]): File[] {
    if (this.maxItems && (this.selectFiles.length + files.length > this.maxItems)) {
      files = files.slice(0, this.maxItems - this.selectFiles.length);
    }

    return files.filter(file => {
      return this.validFile(file);
    });
  }

  validFile(file: File): boolean {
    //TODO: (验证还需进一步完善)。
    let errors = [];
    if (this.maxFileSize && file.size > this.maxFileSize) {
      errors.push(`${file.name}: size is too large, allowed size is ${this.maxFileSize};`);
    }

    if (this.accept && !this.validFileType(file)) {
      errors.push(`${file.name}: file type is invalid, allowed file type is ${this.accept};`);
    }

    this.errors.push(...errors);
    return !errors.length;
  }

  private validFileType(file: File) {
    return this.accept.split(';').some(type => {
      return new RegExp(`^${type.replace(/\*/g, '.*')}$`).test(file.type);
    });
  }

  mapFileModel(files: File[]): Promise<SelectFileModel[]> {
    return Promise.all(files.map(file => {
      return readFileAsDataURL(file)
        .then(dataUrl => ({ dataUrl, file, displaySize: formatFileSize(file.size) }));
    }));

  }
}
