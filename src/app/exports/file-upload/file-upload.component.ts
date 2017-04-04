import {
  Component, ChangeDetectionStrategy, ViewChild, ElementRef, Input, AfterViewInit,
  Renderer2, Output, EventEmitter, ChangeDetectorRef
} from '@angular/core';
import { SelectFileModel } from './file-upload.model';
import { readFileAsDataURL } from '../utils/dom-utils';
import { Http, RequestOptionsArgs, Response } from '@angular/http';

@Component({
  selector: 're-file-upload',
  templateUrl: './file-upload.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: 'fileUpload'
})
export class FileUploadComponent implements AfterViewInit {

  @Input() accept: string;
  @Input() multiple: boolean;
  @Input() maxItems: number;
  @Input() maxFileSize: number;
  @Input() uploadUrl: string;
  @Input() uploadRequestOptions: RequestOptionsArgs;
  @Input() imgPreview: boolean;
  @Output() selectFilesChange = new EventEmitter<SelectFileModel[]>();
  @Output() fileUploadSuccess = new EventEmitter<any>();
  @Output() fileUploadError = new EventEmitter<any>();
  @ViewChild('file') fileInput: ElementRef;
  selectFiles: SelectFileModel[] = [];
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

  removeAllUnUploadFiles() {
    this.selectFiles = this.selectFiles.filter(item => item.uploaded);
  }

  onRemoveFile(fileItem) {
    this.selectFiles = this.selectFiles.filter(item => item !== fileItem);
  }

  uploadAllFiles() {
    if (this.selectFiles.length) {
      const formData = new FormData();
      // this.selectFiles.filter()
      this.selectFiles.reduce((formData, fileItem) => {
        formData.append('file', fileItem.file);
        return formData;
      }, formData);

      this.http.post(this.uploadUrl, formData, this.uploadRequestOptions)
        .subscribe(
          (res: Response) => this.fileUploadSuccess.emit(res.json()),
          error => this.fileUploadError.emit(error)
        );
    }
  }

  private handleFileChoose(uploadFiles: FileList) {
    const files = this.validFiles(Array.from(uploadFiles));
    //TODO: (比对去掉超过maxItems的部分)。
    this.mapFileModel(files)
      .then(fileModels => {
        this.selectFiles = [...this.selectFiles, ...fileModels];
        this.selectFilesChange.emit(this.selectFiles);
        console.log(this.selectFiles);
        this.changeDetectorRef.markForCheck();
      });
  }

  validFiles(files: File[]): File[] {
    // return valid files(size & accept)
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
        .then(dataUrl => ({ dataUrl, file, displaySize: this.displaySize(file) }));
    }));

  }

  displaySize(file: File) {
    return file.size;
  }
}
