import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TreeViewComponent } from './tree-view.component';
import { TreeNodeComponent } from './tree-node.component';
import { FormsModule } from '@angular/forms';
import { TreePanelComponent } from './tree-panel.component';
import { CheckboxGroupModule } from '../checkbox-group/checkbox-group.module';
import { DraggableModule } from '../draggable/draggable.module';

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
