import { Component, Input, Output, EventEmitter, TemplateRef } from '@angular/core';
import { RebirthNGConfig } from '../rebirth-ng.config';

@Component({
  selector: 're-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.scss'],
  exportAs: 'treeView'
})
export class TreeViewComponent {
  @Input() treeData: any[];
  @Input() parentNode: any;
  @Input() valueField;
  @Input() textField;
  @Input() iconField: string;
  @Input() checkable = false;
  @Input() allowMutipleSelected = false;
  @Input() nodeItemTemplate: TemplateRef<any>;
  @Input() nodeItemToolbarTemplate: TemplateRef<any>;
  @Input() leafIcon;
  @Input() expendIcon;
  @Input() unExpendIcon;
  @Output() nodeItemClicked = new EventEmitter<any>();
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

  getSelectNode() {
    return this.getMatchedItems(this.treeData, '$$select');
  }

  getCheckedNodes() {
    return this.getMatchedItems(this.treeData, '$$check');
  }

  private getMatchedItems(items: any[], field) {
    if (!items) {
      return [];
    }

    const nodes = [];
    items.forEach((nodeItem) => {
      if (nodeItem[field]) {
        nodes.push(nodeItem[this.valueField]);
      }
      nodes.push(...this.getMatchedItems(nodeItem.children, field));
    });

    return nodes;
  }
}
