import { Component, Input, Output, EventEmitter, TemplateRef } from '@angular/core';
import { RebirthNGConfig } from '../rebirth-ng.config';
import { Observable } from 'rxjs';
import { TreeViewService } from './tree-view.service';

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
  @Input() collapseIcon;
  @Output() nodeItemClicked = new EventEmitter<any>();
  @Output() nodeItemDroped = new EventEmitter<any>();
  @Output() nodeItemDbClicked = new EventEmitter<any>();
  @Output() nodeItemCheckedChanged = new EventEmitter<any>();
  @Output() nodeItemExpended = new EventEmitter<any>();
  private selectNode: any;

  constructor(rebirthNGConfig: RebirthNGConfig, private treeViewService: TreeViewService) {
    this.valueField = rebirthNGConfig.treeView.valueField;
    this.textField = rebirthNGConfig.treeView.textField;
    this.leafIcon = rebirthNGConfig.treeView.leafIcon;
    this.expendIcon = rebirthNGConfig.treeView.expendIcon;
    this.collapseIcon = rebirthNGConfig.treeView.collapseIcon;
    this.loadingIcon = rebirthNGConfig.treeView.loadingIcon;
  }

  onNodeItemExpended(node) {
    this.nodeItemExpended.emit(node);
  }

  onNodeItemClicked(node) {
    if (!this.allowMutipleSelected) {
      if (this.selectNode && this.selectNode !== node) {
        this.selectNode.$select = false;
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
    source.$select = false;
    target.children.push(source);
    this.nodeItemDroped.emit($event);
  }

  getSelectNodes() {
    return this.treeViewService.getSelectNodes(this.treeData);
  }

  getCheckedNodes() {
    return this.treeViewService.getCheckedNodes(this.treeData);
  }

  getMatchedItems(match: (node: any) => boolean) {
    return this.treeViewService.getMatchedItems(this.treeData, match);
  }

  getFirstMatchedItem(match: (node: any) => boolean) {
    return this.treeViewService.getFirstMatchedItem(this.treeData, match);
  }

  getTreeNodeByValue(value) {
    return this.treeViewService.getTreeNodeByValue(this.treeData, this.valueField, value);
  }

  expendAllNodes() {
    return this.treeViewService.expendAllNodes(this.treeData);
  }

  collapseAllNodes() {
    return this.treeViewService.collapseAllNodes(this.treeData);
  }

  expendNodesByLevel(level: number) {
    this.treeViewService.expendNodesByLevel(this.treeData, level);
  }

  expendNodesByValue(value: any) {
    this.treeViewService.expendNodesByValue(this.treeData, this.valueField, value);
  }

  getNodePathByValue(value: any) {
    return this.treeViewService.getNodePathByValue(this.treeData, this.valueField, value);
  }

  checkAllNodes() {
    return this.treeViewService.checkAllNodes(this.treeData);
  }

  unCheckAllNodes() {
    return this.treeViewService.unCheckAllNodes(this.treeData);
  }

  appendNodes(parentId, nodes: any[]) {
    return this.treeViewService.appendNodes(this.treeData, this.valueField, parentId, nodes);
  }

  removeNode(value: any) {
    return this.treeViewService.removeNode(this.treeData, this.valueField, value);
  }
}
