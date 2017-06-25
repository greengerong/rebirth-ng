import { Component, Input, Output, EventEmitter, Optional, OnInit, Host, OnDestroy, ContentChild } from '@angular/core';
import { PanelGroup } from './panel-group.model';
import { RebirthNGConfig } from '../rebirth-ng.config';
import { stopPropagationIfExist } from '../utils/dom-utils';
import { PanelHeaderComponent } from './panel-header.component';
import { PanelBodyComponent } from './panel-body.component';
import { PanelFooterComponent } from './panel-footer.component';

@Component({
  selector: 're-panel,re-accordion-item',
  templateUrl: './panel.component.html',
  exportAs: 'panel'
})
export class PanelComponent implements OnInit, OnDestroy {
  @Input() id;
  @Input() type: 'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger' = 'default';
  @Input() closable: boolean;
  @Input() collapsable: boolean;
  @Input() isCollapsed = false;
  @Input() cssClass: string;
  @Output() close = new EventEmitter<PanelComponent>();
  @Output() collapse = new EventEmitter<boolean>();
  @ContentChild(PanelHeaderComponent) panelHeader;
  @ContentChild(PanelBodyComponent) panelBody;
  @ContentChild(PanelFooterComponent) panelFooter;

  constructor(@Optional() @Host() private  panelGroup: PanelGroup, rebirthNGConfig: RebirthNGConfig) {
    this.type = <any>rebirthNGConfig.panel.type;
    this.closable = rebirthNGConfig.panel.closable;
    this.collapsable = rebirthNGConfig.panel.collapsable;
  }

  ngOnInit(): void {
    if (this.panelGroup) {
      this.panelGroup.$addItem(this);
    }
  }

  onClose($event: Event) {
    stopPropagationIfExist($event);
    this.close.emit(this);
  }

  onCollapse() {
    if (this.collapsable) {
      this.isCollapsed = !this.isCollapsed;
      this.collapse.emit(this.isCollapsed);
    }
  }

  ngOnDestroy(): void {
    if (this.panelGroup) {
      this.panelGroup.$removeItem(this);
    }
  }
}
