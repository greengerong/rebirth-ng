import { Component, Input, Output, EventEmitter, TemplateRef } from '@angular/core';
import { RebirthNGConfig } from '../rebirth-ng.config';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 're-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.scss'],
  exportAs: 'treeView'
})
export class TreeViewComponent {
  @Input() treeData: any[];
  @Input() valueField;
  @Input() textField;
  @Input() cssClass: string;
  @Input() nodeCssClass: string;
  @Input() iconField: string;
  @Input() checkable = false;
  @Input() lazyLoad = false;
  @Input() loadingIcon: string;
  @Input() loadChildren: (parent: any) => Observable<any[]>;
  @Input() allowDraggable = false;
  @Input() allowMutipleSelected = false;
  @Input() nodeItemTemplate: TemplateRef<any>;
  @Input() nodeItemToolbarTemplate: TemplateRef<any>;
  @Input() leafIcon;
  @Input() expendIcon;
  @Input() unExpendIcon;
  @Output() nodeItemClicked = new EventEmitter<any>();
  @Output() nodeItemDroped = new EventEmitter<any>();
  @Output() nodeItemDbClicked = new EventEmitter<any>();
  @Output() nodeItemCheckedChanged = new EventEmitter<any>();
  @Output() nodeItemExpended = new EventEmitter<any>();
  private selectNode: any;

  constructor(rebirthNGConfig: RebirthNGConfig) {
    this.valueField = rebirthNGConfig.treeView.valueField;
    this.textField = rebirthNGConfig.treeView.textField;
    this.leafIcon = rebirthNGConfig.treeView.leafIcon;
    this.expendIcon = rebirthNGConfig.treeView.expendIcon;
    this.unExpendIcon = rebirthNGConfig.treeView.unExpendIcon;
    this.loadingIcon = rebirthNGConfig.treeView.loadingIcon;
  }

  onNodeItemExpended(node) {
    this.nodeItemExpended.emit(node);
  }

  onNodeItemClicked(node) {
    if (!this.allowMutipleSelected) {
      if (this.selectNode && this.selectNode !== node) {
        this.selectNode.$$select = false;
      }
      this.selectNode = node;
    }
    this.nodeItemClicked.emit(node);
  }

  onNodeItemDbClicked(node) {
    this.nodeItemDbClicked.emit(node);
  }

  onNodeItemCheckedChanged(node) {
    this.nodeItemCheckedChanged.emit(node);
  }

  onNodeItemDroped($event) {
    const target = $event.target;
    if (!target) {
      return;
    }
    const source = $event.data.data.node;
    const sourceParent = $event.data.data.parent;
    if (sourceParent && sourceParent[this.valueField]) {
      const matchNode = this.getTreeNodeByValue(sourceParent[this.valueField]);
      if (matchNode) {
        matchNode.node.children = matchNode.node.children
          .filter((nodeItem) => nodeItem[this.valueField] !== source[this.valueField]);
      }
    } else {
      if (this.treeData.length < 2) {
        return;
      }
      this.treeData = this.treeData.filter((nodeItem) => nodeItem[this.valueField] !== source[this.valueField]);
    }
    target.children = target.children || [];
    source.$$select = false;
    target.children.push(source);
    this.nodeItemDroped.emit($event);
  }

  getSelectNode() {
    const matchedItems = this.innerGetMatchedItems(null, this.treeData, (node) => node.$$select);
    return matchedItems.map((item) => item.node[this.valueField]);
  }

  getCheckedNodes() {
    const matchedItems = this.innerGetMatchedItems(null, this.treeData, (node) => node.$$check);
    return matchedItems.map((item) => item.node[this.valueField]);
  }

  getMatchedItems(match: (node: any) => boolean) {
    return this.innerGetMatchedItems(null, this.treeData, match);
  }

  getFirstMatchedItem(match: (node: any) => boolean) {
    return this.innerGetFirstMatchedItem(null, this.treeData, match);
  }

  getTreeNodeByValue(value) {
    return this.innerGetFirstMatchedItem(null, this.treeData, (node) => node[this.valueField] === value);
  }

  expendAllNodes() {
    this.innerLookNode(null, this.treeData, (node) => {
      node.$$expend = true;
    });
  }

  checkAllNodes() {
    this.innerLookNode(null, this.treeData, (node) => {
      node.$$check = true;
    });
  }


  appendNodes(parentId, nodes: any[]) {
    const parentNode = this.getTreeNodeByValue(parentId);
    parentNode.node.children = parentNode.node.children || [];
    parentNode.node.children.push(...nodes);
    return parentNode;
  }

  removeNode(value: any) {
    const node = this.getTreeNodeByValue(value);
    if (node.parent) {
      node.parent.children = node.parent.children.filter((nodeItem) => nodeItem[this.valueField] !== value);
    } else {
      this.treeData = this.treeData.filter((nodeItem) => nodeItem[this.valueField] !== value);
    }
    return node;
  }

  private innerLookNode(parent, items: any[], action: (node: any, parent: any) => void) {
    if (!items) {
      return;
    }

    const nodes = [];
    items.forEach((nodeItem) => {
      action(nodeItem, parent);
      this.innerLookNode(nodeItem, nodeItem.children, action);
    });

    return nodes;
  }

  private innerGetMatchedItems(parent, items: any[], match: (node: any) => boolean) {
    if (!items) {
      return [];
    }

    const nodes = [];
    items.forEach((nodeItem) => {
      if (match(nodeItem)) {
        nodes.push({ node: nodeItem, parent: parent });
      }
      nodes.push(...this.innerGetMatchedItems(nodeItem, nodeItem.children, match));
    });

    return nodes;
  }

  private innerGetFirstMatchedItem(parent, items: any[], match: (node: any) => boolean) {
    if (!items) {
      return;
    }

    for (let i = 0; i < items.length; i++) {
      const nodeItem = items[i];
      if (match(nodeItem)) {
        return { node: nodeItem, parent: parent };
      }
      const matchNode = this.innerGetFirstMatchedItem(nodeItem, nodeItem.children, match);
      if (matchNode) {
        return matchNode;
      }
    }
  }
}
