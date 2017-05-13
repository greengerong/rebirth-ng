import { Component } from '@angular/core';
import { TreeViewModel } from '../../exports';

@Component({
  selector: 're-tree-view-demo',
  templateUrl: './tree-view-demo.component.html'
})
export class TreeViewDemoComponent {
  treeData = require('./data.json');
}
