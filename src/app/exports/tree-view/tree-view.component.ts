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
  @Input() nodeItemTemplate: TemplateRef<any>;
  @Input() nodeItemToolbarTemplate: TemplateRef<any>;
  @Input() leafIcon;
  @Input() expendIcon;
  @Input() unExpendIcon;
  @Output() nodeItemClicked = new EventEmitter<any>();
  @Output() nodeItemDbClicked = new EventEmitter<any>();
  @Output() nodeItemCheckedChanged = new EventEmitter<any>();
  @Output() nodeItemExpended = new EventEmitter<any>();

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
    this.nodeItemClicked.emit(node);
  }

  onNodeItemDbClicked(node) {
    this.nodeItemDbClicked.emit(node);
  }

  onNodeItemCheckedChanged(node) {
    this.nodeItemCheckedChanged.emit(node);
  }
}
