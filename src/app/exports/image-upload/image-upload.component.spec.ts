/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { ImageUploadModule } from './image-upload.module';
import { HttpClientModule } from '@angular/common/http';

describe('ImageUpload', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        ImageUploadModule
      ],
    });
    TestBed.compileComponents();
  });

  it('mcok test', async(() => {
    expect(true).toBeTruthy();
  }));

});
