import { Component, Input, TemplateRef, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { TreeViewComponent } from './tree-view.component';
import { DraggableDirective } from '../draggable';
import { TreePanelComponent } from './tree-panel.component';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

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
  @ViewChild('nodeItemContent') nodeItemContent: ElementRef;
  isLoading: boolean;
  isAcceptDrop = ($event) => {
    const dropData = JSON.parse($event.dataTransfer.getData(DraggableDirective.DRAGGABLE_DATA_KEY));
    if (!dropData.data.node) {
      return false;
    }

    if (this.isNodeMyself(dropData)) {
      return false;
    }

    if (this.isDescendant(dropData.data.node, this.node)) {
      return false;
    }

    return true;
  }

  constructor(private treeViewComponent: TreeViewComponent,
              private treePanelComponent: TreePanelComponent,
              private renderer: Renderer2) {

  }


  getNodeExpendIcon() {
    if (this.isLeaf()) {
      return this.leafIcon;
    }

    return this.node.$expend ? this.expendIcon : this.collapseIcon;
  }

  onExpendedIconClick($event) {
    $event.stopPropagation();

    if (this.isLeaf() || this.isLoading) {
      return;
    }

    let loadObservable = of(null);
    if (this.lazyLoad && !this.node.$loaded) {
      this.isLoading = true;
      loadObservable = this.loadChildren(this.node)
        .pipe(map((children) => {
          this.node.children = children || [];
          this.node.$loaded = true;
        }));
    }

    loadObservable.subscribe(() => {
      this.isLoading = false;
      this.node.$expend = !this.node.$expend;
      this.treeViewComponent.onNodeItemExpended(this.node);
    }, () => {
      this.isLoading = false;
    });
  }

  onNodeItemClick($event) {
    $event.stopPropagation();
    this.node.$select = !this.node.$select;
    this.treeViewComponent.onNodeItemClicked(this.node);
  }

  onNodeItemDbClicked($event) {
    this.treeViewComponent.onNodeItemDbClicked(this.node);
  }

  nodeItemCheckedChange(checked) {
    this.changeChildrenChecked(this.node.children, checked);
    this.treePanelComponent.onNodeItemCheckedChanged(this.node);
  }

  onChildrenNodeCheckedChange(node) {
    this.node.$check = !this.node.children.some((item) => !item.$check);
    this.treePanelComponent.onNodeItemCheckedChanged(node);
  }

  isLeaf() {
    if (this.lazyLoad && !this.node.$loaded) {
      return false;
    }

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
    if (dropData.data.node && !this.isNodeMyself(dropData)) {
      this.treeViewComponent.onNodeItemDroped({ target: this.node, data: dropData });
    }
    setTimeout(() => {
      this.renderer.removeClass(this.nodeItemContent.nativeElement, 'drop-node-enter');
    }, 0);
  }

  private isNodeMyself(dropData: any) {
    return this.node[this.valueField] === dropData.data.node[this.valueField];
  }

  private isDescendant(parent, target) {
    if (!parent) {
      return false;
    }

    return (parent.children || []).some((nodeItem) => {
      return nodeItem[this.valueField] === target[this.valueField] || this.isDescendant(nodeItem, target);
    });
  }

  private changeChildrenChecked(nodes: any[], checked) {
    if (!nodes) {
      return;
    }

    nodes.forEach((node) => {
      node.$check = checked;
      this.changeChildrenChecked(node.children, checked);
    });
  }

}
