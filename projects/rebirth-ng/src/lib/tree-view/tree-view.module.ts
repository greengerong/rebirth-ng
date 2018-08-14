import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TreeViewComponent } from './tree-view.component';
import { TreeNodeComponent } from './tree-node.component';
import { CheckboxGroupModule } from '../checkbox-group/index';
import { FormsModule } from '@angular/forms';
import { DraggableModule } from '../draggable/index';
import { TreePanelComponent } from './tree-panel.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CheckboxGroupModule,
    DraggableModule
  ],
  providers: [],
  declarations: [
    TreeViewComponent,
    TreeNodeComponent,
    TreePanelComponent
  ],
  exports: [
    TreeViewComponent,
    TreeNodeComponent,
    TreePanelComponent
  ],
})
export class TreeViewModule {
}
