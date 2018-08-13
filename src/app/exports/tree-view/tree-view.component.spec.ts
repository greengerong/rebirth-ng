/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { TreeViewComponent } from './tree-view.component';
import { TreeViewModule } from './tree-view.module';

describe('TreeView', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        TreeViewModule
      ],
    });
    TestBed.compileComponents();
  });

  it('mcok test', async(() => {
    expect(true).toBeTruthy();
  }));

});
