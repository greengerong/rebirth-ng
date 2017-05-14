import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter, TemplateRef } from '@angular/core';

@Component({
  selector: 're-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: 'treeView'
})
export class TreeViewComponent {
  @Input() treeData: any[];
  @Input() valueFeild = 'id';
  @Input() textField: 'label';
  @Input() iconField: 'label';
  @Input() checkable = false;
  @Input() nodeItemTemplate: TemplateRef<any>;
  @Input() nodeItemToolbarTemplate: TemplateRef<any>;
  @Output() nodeItemClicked = new EventEmitter<any>();
  @Output() nodeItemCheckedChanged = new EventEmitter<any>();
  @Output() nodeItemExpended = new EventEmitter<any>();
}
