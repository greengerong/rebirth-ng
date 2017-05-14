import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { TreeViewComponent } from './tree-view.component';

@Component({
  selector: 're-tree-node,[reTreeNode]',
  templateUrl: './tee-node.component.html',
  styleUrls: ['./tee-node.component.scss'],
  exportAs: 'treeNode'
})
export class TreeNodeComponent implements OnInit {
  @Input() node: any;
  @Input() valueFeild = 'id';
  @Input() textField = 'label';
  @Input() iconField: string;
  @Input() checkable = false;
  @Input() nodeItemTemplate: TemplateRef<any>;
  @Input() nodeItemToolbarTemplate: TemplateRef<any>;

  constructor(private treeViewComponent: TreeViewComponent) {
  }

  ngOnInit() {
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
    this.treeViewComponent.onNodeItemClicked(this.node);
  }

  onNodeItemDbClicked() {
    this.treeViewComponent.onNodeItemDbClicked(this.node);
  }

  isLeaf() {
    return !this.node.children || !this.node.children.length;
  }
}
