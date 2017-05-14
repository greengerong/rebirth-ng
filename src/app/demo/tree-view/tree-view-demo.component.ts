import { Component } from '@angular/core';
import { TreeViewModel } from '../../exports';

const treeData = require('./data.json');
@Component({
  selector: 're-tree-view-demo',
  templateUrl: './tree-view-demo.component.html'
})
export class TreeViewDemoComponent {
  allowMutipleSelected = false;
  treeData1 = this.clone(treeData);
  treeData2 = this.clone(treeData);
  treeData3 = this.clone(treeData);
  treeData4 = this.clone(treeData);

  clone(data) {
    return JSON.parse(JSON.stringify(data));
  }
}
