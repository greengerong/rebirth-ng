import { Component } from '@angular/core';
import { TreeViewModel } from '../../exports';

const treeData = require('./data.json');
@Component({
  selector: 're-tree-view-demo',
  templateUrl: './tree-view-demo.component.html'
})
export class TreeViewDemoComponent {
  treeData1 = this.clone(treeData);
  treeData2 = this.clone(treeData);
  treeData3 = this.clone(treeData);
  treeData4 = this.clone(treeData);
  treeData5 = this.clone(treeData);
  treeNodeCount = 500;
  largeNodes: any[];
  largeTreeCheckable: boolean;

  clone(data) {
    return JSON.parse(JSON.stringify(data));
  }

  private  generateTreeData() {
    this.largeNodes = this.dataMaker(this.treeNodeCount);
    console.log('tree data generate finish!');
  }

  clearGenerateTreeData() {
    this.largeNodes = [];
  }

  private dataMaker(count) {
    const nodes = [];
    let i = 0;
    while (i < count) {
      const node: any = { id: i, name: `node-${i}` };
      node.children = this.generateChildren(i);
      nodes.push(node);
      i = i + 10;
    }

    return nodes;
  }

  private generateChildren(id) {
    return [{
      id: id + 1,
      name: `node-${id + 1}`,
      children: [
        {
          id: id + 2,
          name: `node-${id + 2}`,
          children: [
            {
              id: id + 4,
              name: `node-${id + 4}`
            },
            {
              id: id + 5,
              name: `node-${id + 5}`
            },
            {
              id: id + 6,
              name: `node-${id + 6}`
            }
          ]
        },
        {
          id: id + 3,
          name: `node-${id + 3}`,
          children: [
            {
              id: id + 7,
              name: `node-${id + 7}`
            },
            {
              id: id + 8,
              name: `node-${id + 8}`
            },
            {
              id: id + 9,
              name: `node-${id + 9}`
            }
          ]
        }
      ]
    }];
  }
}
