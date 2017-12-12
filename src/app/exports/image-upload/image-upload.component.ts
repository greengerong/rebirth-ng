import {
  Component, ChangeDetectionStrategy, Optional, ChangeDetectorRef, Renderer2
} from '@angular/core';
import { FileUpload } from '../file-upload/file-upload';
import { RebirthNGConfig } from '../rebirth-ng.config';
import { HttpClient } from '@angular/common/http';
import { ModalService } from '../modal';
import { SelectFileModel } from '../file-upload/file-upload.model';
import { noop } from '../utils';
import { ViewImageModalComponent } from './view-image-modal.component';

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
              changeDetectorRef: ChangeDetectorRef,
              private modalService: ModalService) {
    super(rebirthNGConfig, renderer, http, changeDetectorRef);
    this.autoUpload = true;
    this.accept = 'image/*';
  }

  viewImage(fileItem: SelectFileModel) {
    this.modalService.open({
      component: ViewImageModalComponent,
      resolve: { url: fileItem.dataUrl, name: fileItem.name }
    }).subscribe(noop, noop);
  }
}
