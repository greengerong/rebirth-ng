import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { TreeViewComponent } from './tree-view.component';

@Component({
  selector: 're-tree-node,[reTreeNode]',
  templateUrl: './tee-node.component.html',
  styleUrls: ['./tee-node.component.scss'],
  exportAs: 'treeNode'
})
export class TreeNodeComponent {
  @Input() node: any;
  @Input() parentNode: any;
  @Input() valueField: string;
  @Input() textField: string;
  @Input() iconField: string;
  @Input() checkable = false;
  @Input() nodeItemTemplate: TemplateRef<any>;
  @Input() nodeItemToolbarTemplate: TemplateRef<any>;
  @Input() leafIcon;
  @Input() expendIcon;
  @Input() unExpendIcon;

  constructor(private treeViewComponent: TreeViewComponent) {
  }


  getNodeExpendIcon() {
    if (this.isLeaf()) {
      return this.leafIcon;
    }

    return this.node.$$expend ? this.expendIcon : this.unExpendIcon;
  }

  onExpendedIconClick($event) {
    $event.stopPropagation();

    if (this.isLeaf()) {
      return;
    }
    this.node.$$expend = !this.node.$$expend;
    this.treeViewComponent.onNodeItemExpended(this.node);
  }

  onNodeItemClick($event) {
    $event.stopPropagation();
    this.node.$$select = !this.node.$$select;
    this.treeViewComponent.onNodeItemClicked(this.node);
  }

  onNodeItemDbClicked() {
    this.treeViewComponent.onNodeItemDbClicked(this.node);
  }

  nodeItemCheckedChange(checked) {
    this.changeChildrenChecked(this.node.children, checked);
    this.treeViewComponent.onNodeItemCheckedChanged(this.node);
  }

  onChildrenNodeCheckedChange(node) {
    this.node.$$check = !this.node.children.some((item) => !item.$$check);
    this.treeViewComponent.nodeItemCheckedChanged.emit(node);
  }

  onChildrenNodeItemClicked(node) {
    this.treeViewComponent.onNodeItemClicked(node);
  }

  onChildrenNodeItemDbClicked(node) {
    this.treeViewComponent.onNodeItemDbClicked(node);
  }

  onChildrenNodeItemExpended(node) {
    this.treeViewComponent.onNodeItemExpended(node);
  }

  changeChildrenChecked(nodes: any[], checked) {
    if (!nodes) {
      return;
    }

    nodes.forEach((node) => {
      node.$$check = checked;
      this.changeChildrenChecked(node.children, checked);
    });
  }

  isLeaf() {
    return !this.node.children || !this.node.children.length;
  }
}
