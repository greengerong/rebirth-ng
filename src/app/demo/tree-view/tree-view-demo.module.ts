import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeViewDemoComponent } from './tree-view-demo.component';
import { RebirthNGModule } from '../../exports';


@NgModule({
  imports: [
    CommonModule,
    RebirthNGModule
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
