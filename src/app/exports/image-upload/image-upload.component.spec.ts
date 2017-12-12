/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { ImageUploadComponent } from './image-upload.component';

describe('ImageUpload', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ImageUploadModule
      ],
    });
    TestBed.compileComponents();
  });

  it('mcok test', async(() => {
    expect(true).toBeTruthy();
  }));

});
