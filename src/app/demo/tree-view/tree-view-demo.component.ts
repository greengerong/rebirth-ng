import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { timer } from 'rxjs';

const treeData = require('./data.json');

@Component({
  selector: 're-tree-view-demo',
  templateUrl: './tree-view-demo.component.html',
  styles: [`
    :host ::ng-deep .glyphicon-file {
      color: #FF9800;
    }

    :host ::ng-deep .glyphicon-folder-close {
      color: #FF9800;
    }

    :host ::ng-deep .glyphicon-folder-open {
      color: #FF9800;
    }
  `]
})
export class TreeViewDemoComponent implements OnInit {
  treeData1: any;
  treeData2: any;
  treeData3: any;
  treeData4: any;
  treeData5: any;
  lazyLoadTreeData: any;
  treeNodeCount = 500;
  largeNodes: any[];
  largeTreeCheckable: boolean;

  ngOnInit(): void {
    timer(1000 * 1)
      .subscribe(() => {
        this.treeData1 = this.clone(treeData);
        this.treeData2 = this.clone(treeData);
        this.treeData3 = this.clone(treeData);
        this.treeData4 = this.clone(treeData);
        this.treeData5 = this.clone(treeData);
        this.lazyLoadTreeData = [{
          'id': '1',
          'pid': '0',
          'name': 'Lazyload node 1',
        },
          {
            'id': '2',
            'pid': '0',
            'name': 'Lazyload node 2',
          },
          {
            'id': '3',
            'pid': '0',
            'name': 'Lazyload node 3',
          }];
      });

  }

  loadChildren = (parent) => {
    const pid = parent.id;
    console.log(`Load children for parent ${pid}`);
    if (pid.split('-').length > 3) {
      return of([]).pipe(delay(5 * 1000));
    }

    return of([
      {
        id: `${pid}-1`,
        name: `Lazyload node ${pid}-1`
      },
      {
        id: `${pid}-2`,
        name: `Lazyload node ${pid}-2`
      },
      {
        id: `${pid}-3`,
        name: `Lazyload node ${pid}-3`
      }
    ])
      .pipe(delay(5 * 1000));
  }

  clone(data) {
    return JSON.parse(JSON.stringify(data));
  }

  generateTreeData() {
    this.largeNodes = this.dataMaker(this.treeNodeCount);
    console.log('tree data generate finish!');
  }

  clearGenerateTreeData() {
    this.largeNodes = [];
  }

  addNode(node, parentNode) {
    console.log('add node', `node= ${node.name}; parent= ${parentNode && parentNode.name}`);
  }

  removeNode(node, parentNode) {
    console.log('remove node', `node= ${node.name}; parent= ${parentNode && parentNode.name}`);
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
