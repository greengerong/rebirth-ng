/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { EllipsisComponent } from './ellipsis.component';
import { EllipsisModule } from './ellipsis.module';

describe('ellipsis', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        EllipsisModule
      ],
    });
    TestBed.compileComponents();
  });

  it('mcok test', async(() => {
    expect(true).toBeTruthy();
  }));

});
