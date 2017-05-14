import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TreeViewComponent } from './tree-view.component';
import { TreeNodeComponent } from './tree-node.component';
import { CheckboxGroupModule } from '../checkbox-group';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CheckboxGroupModule
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
