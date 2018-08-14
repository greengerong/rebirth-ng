/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { SliderModule } from './slider.module';

describe('Slider', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        SliderModule
      ],
    });
    TestBed.compileComponents();
  });

  it('mcok test', async(() => {
    expect(true).toBeTruthy();
  }));

});
