/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { TagsModule } from './tags.module';

describe('Tags', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        TagsModule
      ],
    });
    TestBed.compileComponents();
  });

  it('mcok test', async(() => {
    expect(true).toBeTruthy();
  }));

});
