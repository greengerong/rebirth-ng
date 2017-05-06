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
  ChangeDetectorRef,
  TemplateRef
} from '@angular/core';
import { SelectFileModel } from './file-upload.model';
import { readFileAsDataURL } from '../utils/dom-utils';
import { Http, Response, RequestOptions } from '@angular/http';
import { formatFileSize, formatString } from '../utils/lange-utils';
import { RebirthNGConfig } from '../rebirth-ng.config';
import { file } from 'babel-types';

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
  @Input() maxFileSize: number; // bytes
  @Input() uploadUrl: string;
  @Input() uploadParamName: string;
  @Input() uploadRequestOptions: RequestOptions;
  @Input() imgPreview: boolean;
  @Input() previewWidth: string;
  @Input() cssClass: string;
  @Input() fileSizeErrorMessage: string;
  @Input() fileTypeErrorMessage: string;
  @Input() chooseButton: string;
  @Input() uploadButton: string;
  @Input() cancelButton: string;
  @Input() toolbarTemplate: TemplateRef<any>;
  @Input() previewTemplate: TemplateRef<any>;
  @Output() selectFilesChange = new EventEmitter<SelectFileModel[]>();
  @Output() fileUploadSuccess = new EventEmitter<SelectFileModel>();
  @Output() fileUploadError = new EventEmitter<SelectFileModel>();
  @Output() removeFiles = new EventEmitter<SelectFileModel[]>();
  @Output() uploadFilesChange = new EventEmitter<SelectFileModel[]>();
  @Input() uploadFiles: SelectFileModel[] = [];
  @ViewChild('file') fileInput: ElementRef;
  selectFiles: SelectFileModel[] = [];
  errors: string[] = [];

  constructor(private rebirthNGConfig: RebirthNGConfig,
              private renderer: Renderer2,
              private http: Http,
              private changeDetectorRef: ChangeDetectorRef) {

    this.fileSizeErrorMessage = this.rebirthNGConfig.fileUpload.fileSizeErrorMessage;
    this.fileTypeErrorMessage = this.rebirthNGConfig.fileUpload.fileTypeErrorMessage;
    this.uploadParamName = this.rebirthNGConfig.fileUpload.uploadParamName;
    this.previewWidth = this.rebirthNGConfig.fileUpload.previewWidth;
    this.imgPreview = this.rebirthNGConfig.fileUpload.imgPreview;
    this.chooseButton = this.rebirthNGConfig.fileUpload.chooseButton;
    this.uploadButton = this.rebirthNGConfig.fileUpload.uploadButton;
    this.cancelButton = this.rebirthNGConfig.fileUpload.cancelButton;

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
    fileInput.value = null;
    fileInput.click(); // simulate file input event
  }

  newFileChoose(fileInput: HTMLInputElement) {
    this.clearErrors();
    if (fileInput.files && fileInput.files.length) {
      this.handleFileChoose(fileInput.files);
    }
  }

  removeAllSelectedFiles() {
    const files = this.selectFiles;
    this.selectFiles = [];
    this.clearErrors();
    this.removeFiles.emit(files);
  }

  onRemoveFile(fileItem) {
    this.selectFiles = this.selectFiles.filter(item => item !== fileItem);
    this.removeFiles.emit([fileItem]);
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
          this.fileUploadSuccess.emit(fileItem);
          this.uploadFilesChange.emit(this.uploadFiles);
          this.changeDetectorRef.markForCheck();
        },
        (error) => {
          this.errors.push(`${fileItem.name}: Upload error: ${error}`);
          this.fileUploadError.emit({
            name: fileItem.name,
            displaySize: fileItem.displaySize,
            dataUrl: fileItem.dataUrl,
            file: fileItem.file,
            uploadResponse: error
          });
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
    const errors = [];
    if (this.maxFileSize && file.size > this.maxFileSize) {
      errors.push(formatString(this.fileSizeErrorMessage, file.name, formatFileSize(file.size)));
    }

    if (this.accept && !this.validFileType(file)) {
      errors.push(formatString(this.fileTypeErrorMessage, file.name, this.accept));
    }

    this.errors.push(...errors);
    return !errors.length;
  }

  private validFileType(file: File) {
    return this.accept.split(',').some(type => {
      return new RegExp(`^${type.replace(/\*/g, '.*')}$`).test(file.type);
    });
  }

  mapFileModel(files: File[]): Promise<SelectFileModel[]> {
    return Promise.all(files.map(file => {
      return readFileAsDataURL(file)
        .then(dataUrl => ({ dataUrl, name: file.name, file, displaySize: formatFileSize(file.size) }));
    }));

  }
}
