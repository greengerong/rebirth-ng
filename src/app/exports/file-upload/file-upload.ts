import {
  ViewChild,
  ElementRef,
  Input,
  AfterViewInit,
  Renderer2,
  Output,
  EventEmitter,
  ChangeDetectorRef,
  TemplateRef,
} from '@angular/core';
import { SelectFileModel } from './file-upload.model';
import { readFileAsDataURL } from '../utils/dom-utils';
import { formatFileSize, formatString } from '../utils/lange-utils';
import { RebirthNGConfig } from '../rebirth-ng.config';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { of } from 'rxjs/observable/of';
import { forkJoin } from 'rxjs/observable/forkJoin';
import { noop } from '../utils';
import { Observable } from 'rxjs/Observable';
import { ControlValueAccessor } from '@angular/forms';

export class FileUpload implements AfterViewInit, ControlValueAccessor {

  @Input() accept: string;
  @Input() multiple = true;
  @Input() autoUpload: boolean;
  @Input() showErrors = true;
  @Input() maxItems: number;
  @Input() maxFileSize: number; // bytes
  @Input() uploadUrl: string;
  @Input() uploadParamName: string;
  @Input() uploadRequestOptions: any;
  @Input() imgPreview: boolean;
  @Input() previewWidth: string;
  @Input() previewHeight: string;
  @Input() cssClass: string;
  @Input() fileSizeErrorMessage: string;
  @Input() fileTypeErrorMessage: string;
  @Input() chooseButton: string;
  @Input() uploadButton: string;
  @Input() cancelButton: string;
  @Input() plusIcon: string;
  @Input() uploadIcon: string;
  @Input() loadingIcon: string;
  @Input() removeIcon: string;
  @Input() canRetry = true;
  @Input() toolbarTemplate: TemplateRef<any>;
  @Input() previewTemplate: TemplateRef<any>;
  @Input() disabled: boolean;
  @Output() selectFilesChange = new EventEmitter<SelectFileModel[]>();
  @Output() fileUploadStart = new EventEmitter<SelectFileModel[]>();
  @Output() fileUploadCompleted = new EventEmitter<SelectFileModel[]>();
  @Output() fileUploadSuccess = new EventEmitter<SelectFileModel>();
  @Output() fileUploadError = new EventEmitter<SelectFileModel>();
  @Output() removeFiles = new EventEmitter<SelectFileModel[]>();
  @Output() uploadFilesChange = new EventEmitter<SelectFileModel[]>();
  @Input() uploadFiles: SelectFileModel[] = [];
  @Input() transformResponseUrl: (res: any) => string;
  @ViewChild('file') fileInput: ElementRef;
  selectFiles: SelectFileModel[] = [];
  isUploading: boolean;
  errors: string[] = [];
  protected onChange = (_: any) => null;
  protected onTouched = () => null;

  constructor(protected rebirthNGConfig: RebirthNGConfig,
              protected renderer: Renderer2,
              protected http: HttpClient,
              protected changeDetectorRef: ChangeDetectorRef) {

    this.fileSizeErrorMessage = this.rebirthNGConfig.fileUpload.fileSizeErrorMessage;
    this.fileTypeErrorMessage = this.rebirthNGConfig.fileUpload.fileTypeErrorMessage;
    this.uploadParamName = this.rebirthNGConfig.fileUpload.uploadParamName;
    this.previewWidth = this.rebirthNGConfig.fileUpload.previewWidth;
    this.previewHeight = this.rebirthNGConfig.fileUpload.previewHeight;
    this.imgPreview = this.rebirthNGConfig.fileUpload.imgPreview;
    this.chooseButton = this.rebirthNGConfig.fileUpload.chooseButton;
    this.uploadButton = this.rebirthNGConfig.fileUpload.uploadButton;
    this.cancelButton = this.rebirthNGConfig.fileUpload.cancelButton;
    this.plusIcon = this.rebirthNGConfig.fileUpload.plusIcon;
    this.uploadIcon = this.rebirthNGConfig.fileUpload.uploadIcon;
    this.loadingIcon = this.rebirthNGConfig.fileUpload.loadingIcon;
    this.removeIcon = this.rebirthNGConfig.fileUpload.removeIcon;
    this.showErrors = this.rebirthNGConfig.fileUpload.showErrors;
    this.transformResponseUrl = this.rebirthNGConfig.fileUpload.transformResponseUrl;

  }

  ngAfterViewInit(): void {
    if (this.accept) {
      this.renderer.setProperty(this.fileInput.nativeElement, 'accept', this.accept);
    }

    this.renderer.setProperty(this.fileInput.nativeElement, 'multiple', this.multiple);
  }

  writeValue(value: any): void {
    this.uploadFiles = value || [];
    this.changeDetectorRef.markForCheck();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  isMoreThanMaxItems() {
    const fileSize = this.getFileCount();
    if (!this.multiple) {
      return fileSize >= 1;
    }
    return this.maxItems && (fileSize >= this.maxItems);
  }

  clearErrors() {
    this.errors = [];
  }

  onDropFiles($event) {
    if (this.disabled) {
      return;
    }
    $event.stopPropagation();
    $event.preventDefault();
    this.clearErrors();
    const files = $event.dataTransfer.files;
    if (files && files.length) {
      this.handleFileChoose(files);
    }
  }

  addNewFile($event) {
    if (this.disabled) {
      return;
    }
    $event.stopPropagation();
    if (!this.isMoreThanMaxItems()) {
      this.fileInput.nativeElement.value = null;
      this.fileInput.nativeElement.click(); // simulate file input event
    }
  }

  newFileChoose(fileInput: HTMLInputElement) {
    this.clearErrors();
    if (fileInput.files && fileInput.files.length) {
      this.handleFileChoose(fileInput.files);
    }
  }

  removeAllSelectedFiles() {
    this.onTouched();
    const files = this.selectFiles;
    this.selectFiles = [];
    this.clearErrors();
    this.removeFiles.emit(files);
  }

  onRemoveFile(fileItem) {
    if (this.disabled) {
      return;
    }
    this.onTouched();
    this.selectFiles = this.selectFiles.filter(item => item !== fileItem);
    this.removeFiles.emit([fileItem]);
  }

  onRemoveUploadFile(fileItem) {
    if (this.disabled) {
      return;
    }
    this.onTouched();
    this.onUploadFileChange(this.uploadFiles.filter(item => item !== fileItem));
    this.removeFiles.emit([fileItem]);
  }

  uploadAllFiles() {
    this.clearErrors();
    this.httpUploadAllFile(this.selectFiles);
  }

  private httpUploadAllFile(files) {
    this.isUploading = true;
    this.fileUploadStart.emit(files);
    const subscriptions = files.map(fileItem => this.httpUploadFile(fileItem));
    forkJoin(subscriptions)
      .subscribe(noop, noop, () => {
        this.isUploading = false;
        this.fileUploadCompleted.emit(files);
        this.onTouched();
      });
  }

  private httpUploadFile(fileItem) {
    const formData = new FormData();
    formData.append(this.uploadParamName, fileItem.file);
    return this.http.post(this.uploadUrl, formData, this.uploadRequestOptions)
      .map((res) => this.onFileUploadSuccess(fileItem, res))
      .catch((error) => this.onFileUploadError(fileItem, error));
  }

  protected onFileUploadSuccess(fileItem, res): Observable<any> {
    fileItem.uploadResponse = res;
    fileItem.url = this.transformResponseUrl(res);
    this.fileUploadSuccess.emit(fileItem);
    this.selectFiles = this.selectFiles.filter(item => item !== fileItem);
    this.onUploadFileChange([...(this.uploadFiles || []), fileItem]);
    this.changeDetectorRef.markForCheck();
    return of({ result: res, success: true });
  }

  private onUploadFileChange(uploadFiles) {
    this.uploadFiles = uploadFiles;
    this.uploadFilesChange.emit(uploadFiles);
    this.onChange(uploadFiles);
  }

  protected onFileUploadError(fileItem, error): Observable<any> {
    this.errors.push(`${fileItem.name}: ${error.error || error.statusText}`);
    this.fileUploadError.emit({
      name: fileItem.name,
      displaySize: fileItem.displaySize,
      url: fileItem.url,
      file: fileItem.file,
      uploadResponse: error
    });

    if (!this.canRetry) {
      this.onRemoveFile(fileItem);
    }

    this.changeDetectorRef.markForCheck();
    return of({ error: error, success: false });
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
          return this.httpUploadAllFile(fileModels);
        }
      });
  }

  validFiles(files: File[]): File[] {
    const fileCount = this.getFileCount();
    const size = this.multiple ? this.maxItems : 1;
    if (size && (fileCount + files.length > size)) {
      files = files.slice(0, size - fileCount);
    }

    return files.filter(file => {
      return this.validFile(file);
    });
  }

  validFile(file: File): boolean {
    const errors = [];
    if (this.maxFileSize && file.size > this.maxFileSize) {
      errors.push(formatString(this.fileSizeErrorMessage, file.name, formatFileSize(this.maxFileSize)));
    }

    if (this.accept && !this.validFileType(file)) {
      errors.push(formatString(this.fileTypeErrorMessage, file.name, this.accept));
    }

    this.errors.push(...errors);
    if (this.errors.length) {
      this.fileUploadError.emit({
        name: file.name,
        file: file,
        uploadResponse: this.errors
      });
    }
    return !errors.length;
  }

  private getFileCount() {
    return ((this.selectFiles || []).length + (this.uploadFiles || []).length);
  }

  private validFileType(file: File) {
    return this.accept.split(',').some(type => {
      return new RegExp(`^${type.replace(/\*/g, '.*')}$`).test(file.type);
    });
  }

  mapFileModel(files: File[]): Promise<SelectFileModel[]> {
    return Promise.all(files.map(file => {
      return readFileAsDataURL(file)
        .then(url => ({ url, name: file.name, file, displaySize: formatFileSize(file.size) }));
    }));

  }
}
