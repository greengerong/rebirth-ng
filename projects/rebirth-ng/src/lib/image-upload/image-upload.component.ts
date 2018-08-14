import {
  Component, ChangeDetectionStrategy, Optional, ChangeDetectorRef, Renderer2, Input, forwardRef
} from '@angular/core';
import { FileUpload } from '../file-upload/file-upload';
import { RebirthNGConfig } from '../rebirth-ng.config';
import { HttpClient } from '@angular/common/http';
import { SelectFileModel } from '../file-upload/file-upload.model';
import { ViewImageModalComponent } from './view-image-modal.component';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ModalService } from '../modal/modal.service';
import { noop } from '../utils/lange-utils';

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
      resolve: { url: fileItem.url, name: fileItem.name }
    }).subscribe(noop, noop);
  }

  uploadBtnIcon() {
    return this.isUploading ? this.loadingIcon : this.plusIcon;
  }
}
