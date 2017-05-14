import { Component, Input, Output, EventEmitter, TemplateRef } from '@angular/core';

@Component({
  selector: 're-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.scss'],
  exportAs: 'treeView'
})
export class TreeViewComponent {
  @Input() treeData: any[];
  @Input() valueFeild = 'id';
  @Input() parentNode: any;
  @Input() textField = 'label';
  @Input() iconField: string;
  @Input() checkable = false;
  @Input() nodeItemTemplate: TemplateRef<any>;
  @Input() nodeItemToolbarTemplate: TemplateRef<any>;
  @Output() nodeItemClicked = new EventEmitter<any>();
  @Output() nodeItemDbClicked = new EventEmitter<any>();
  @Output() nodeItemCheckedChanged = new EventEmitter<any>();
  @Output() nodeItemExpended = new EventEmitter<any>();

  onNodeItemExpended(node) {
    this.nodeItemExpended.emit(node);
  }

  onNodeItemClicked(node) {
    this.nodeItemClicked.emit(node);
  }

  onNodeItemDbClicked(node) {
    this.nodeItemDbClicked.emit(node);
  }

  onNodeItemCheckedChanged(node) {
    this.nodeItemCheckedChanged.emit(node);
  }
}
