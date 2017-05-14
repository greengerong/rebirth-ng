import { Component, Input, TemplateRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 're-tree-panel',
  templateUrl: './tree-panel.component.html'
})
export class TreePanelComponent {
  @Input() treeData: any[];
  @Input() parentNode: any;
  @Input() valueField;
  @Input() textField;
  @Input() iconField: string;
  @Input() checkable = false;
  @Input() allowDraggable = false;
  @Input() allowMutipleSelected = false;
  @Input() nodeItemTemplate: TemplateRef<any>;
  @Input() nodeItemToolbarTemplate: TemplateRef<any>;
  @Input() leafIcon;
  @Input() expendIcon;
  @Input() unExpendIcon;
  @Output() nodeItemCheckedChanged = new EventEmitter<any>();


  onNodeItemCheckedChanged(node) {
    this.nodeItemCheckedChanged.emit(node);
  }
}
