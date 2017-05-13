import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TreeViewComponent } from './tree-view.component';
import { TreeNodeComponent } from './tree-node.component';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [],
  declarations: [
    TreeViewComponent,
    TreeNodeComponent
  ],
  exports: [
    TreeViewComponent,
    TreeNodeComponent
  ],
})
export class TreeViewModule {
}
