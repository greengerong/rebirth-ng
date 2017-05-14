import { Component, Input, TemplateRef, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { TreeViewComponent } from './tree-view.component';
import { DraggableDirective } from '../draggable';
import { TreePanelComponent } from './tree-panel.component';

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
  @Input() allowDraggable = false;
  @Input() allowMutipleSelected = false;
  @Input() nodeItemTemplate: TemplateRef<any>;
  @Input() nodeItemToolbarTemplate: TemplateRef<any>;
  @Input() leafIcon;
  @Input() expendIcon;
  @Input() unExpendIcon;
  @ViewChild('nodeItemContent') nodeItemContent: ElementRef;

  constructor(private treeViewComponent: TreeViewComponent,
              private treePanelComponent: TreePanelComponent,
              private renderer: Renderer2) {

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
    this.treePanelComponent.onNodeItemCheckedChanged(this.node);
  }

  onChildrenNodeCheckedChange(node) {
    this.node.$$check = !this.node.children.some((item) => !item.$$check);
    this.treePanelComponent.onNodeItemCheckedChanged(node);
  }

  isLeaf() {
    return !this.node.children || !this.node.children.length;
  }

  onDragEnter() {
    this.renderer.addClass(this.nodeItemContent.nativeElement, 'drop-node-enter');
  }

  onDragLeave() {
    setTimeout(() => {
      this.renderer.removeClass(this.nodeItemContent.nativeElement, 'drop-node-enter');
    });
  }

  onDropNodeItem($event) {
    const dropData = JSON.parse($event.dataTransfer.getData(DraggableDirective.DRAGGABLE_DATA_KEY));
    this.treeViewComponent.onNodeItemDroped({ target: this.node, data: dropData });
    setTimeout(() => {
      this.renderer.removeClass(this.nodeItemContent.nativeElement, 'drop-node-enter');
    });
  }

  private changeChildrenChecked(nodes: any[], checked) {
    if (!nodes) {
      return;
    }

    nodes.forEach((node) => {
      node.$$check = checked;
      this.changeChildrenChecked(node.children, checked);
    });
  }

}
