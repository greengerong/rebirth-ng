import {
  Component, ChangeDetectionStrategy, Optional, ChangeDetectorRef, Renderer2, Input, forwardRef
} from '@angular/core';
import { FileUpload } from '../file-upload/file-upload';
import { RebirthNGConfig } from '../rebirth-ng.config';
import { HttpClient } from '@angular/common/http';
import { ModalService } from '../modal';
import { SelectFileModel } from '../file-upload/file-upload.model';
import { noop } from '../utils';
import { ViewImageModalComponent } from './view-image-modal.component';
import { Observable } from 'rxjs/Observable';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 're-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: 'imageUpload',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ImageUploadComponent),
    multi: true
  }]
})
export class ImageUploadComponent extends FileUpload {

  @Input() viewIcon: string;

  constructor(rebirthNGConfig: RebirthNGConfig,
              renderer: Renderer2,
              @Optional()  http: HttpClient,
              changeDetectorRef: ChangeDetectorRef,
              private modalService: ModalService) {
    super(rebirthNGConfig, renderer, http, changeDetectorRef);
    this.viewIcon = this.rebirthNGConfig.imageUpload.viewIcon;
    this.imgPreview = true;
    this.autoUpload = true;
    this.accept = 'image/*';
    this.canRetry = false;
  }

  viewImage(fileItem: SelectFileModel) {
    if (this.disabled) {
      return;
    }
    this.modalService.open({
      component: ViewImageModalComponent,
      resolve: { url: fileItem.dataUrl, name: fileItem.name }
    }).subscribe(noop, noop);
  }

  uploadBtnIcon() {
    return this.isUploading ? this.loadingIcon : this.plusIcon;
  }
}
