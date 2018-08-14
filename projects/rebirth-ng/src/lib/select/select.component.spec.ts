/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { SelectModule } from './select.module';

describe('Select', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        SelectModule
      ],
    });
    TestBed.compileComponents();
  });

  it('mcok test', async(() => {
    expect(true).toBeTruthy();
  }));

});
