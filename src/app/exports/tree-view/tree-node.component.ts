import { Component, OnInit, Input, EventEmitter, Output, TemplateRef } from '@angular/core';

@Component({
  selector: 're-tree-node,[reTreeNode]',
  templateUrl: './tee-node.component.html',
  styleUrls: ['./tee-node.component.scss'],
  exportAs: 'treeNode'
})
export class TreeNodeComponent implements OnInit {
  @Input() node: any;
  @Input() valueFeild = 'id';
  @Input() textField: 'label';
  @Input() iconField: 'label';
  @Input() checkable = false;
  @Input() nodeItemTemplate: TemplateRef<any>;
  @Input() nodeItemToolbarTemplate: TemplateRef<any>;
  @Output() nodeItemClicked = new EventEmitter<any>();
  @Output() nodeItemCheckedChanged = new EventEmitter<any>();
  @Output() nodeItemExpended = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

  onExpendedIconClick($event) {
    $event.stopPropagation();

    if (this.isLeaf()) {
      return;
    }
    this.node.$$expend = !this.node.$$expend;
    this.nodeItemExpended.emit(this.node);
  }

  onNodeItemClick($event) {
    $event.stopPropagation();
    this.nodeItemClicked.emit(this.node);
  }

  isLeaf() {
    return !this.node.children || !this.node.children.length;
  }
}
