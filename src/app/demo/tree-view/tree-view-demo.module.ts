import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeViewDemoComponent } from './tree-view-demo.component';
import { RebirthNGModule } from 'rebirth-ng';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    RebirthNGModule,
    FormsModule
  ],
  exports: [
    TreeViewDemoComponent
  ],
  declarations: [TreeViewDemoComponent],
  providers: [],
  entryComponents: [TreeViewDemoComponent]
})
export class TreeViewDemoModule {
}
