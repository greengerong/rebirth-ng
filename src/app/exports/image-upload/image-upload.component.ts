import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 're-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: 'ImageUpload'
})
export class ImageUploadComponent {

}
