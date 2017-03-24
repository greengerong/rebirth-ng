import { Component, Input, Output, EventEmitter, Optional, OnInit, Host, OnDestroy } from '@angular/core';
import { PanelGroup } from './panel-group.model';
import { RebirthNGConfig } from '../rebirth-ng.config';
import { stopPropagationIfExist } from '../utils/dom-utils';

@Component({
  selector: 're-panel,re-accordion-item',
  templateUrl: './panel.component.html',
  exportAs: 'panel'
})
export class PanelComponent implements OnInit, OnDestroy {
  @Input() id;
  @Input() type: 'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger' = 'default';
  @Input() closable: boolean;
  @Input() withoutHeader: boolean;
  @Input() withoutFooter = true;
  @Input() collapsable: boolean;
  @Input() isCollapsed = false;
  @Input() cssClass: string;
  @Output() close = new EventEmitter<PanelComponent>();
  @Output() collapse = new EventEmitter<boolean>();

  constructor(@Optional() @Host() private  panelGroup: PanelGroup, private rebirthUIConfig: RebirthNGConfig) {
    this.type = <any>rebirthUIConfig.panel.type;
    this.closable = rebirthUIConfig.panel.closable;
    this.collapsable = rebirthUIConfig.panel.collapsable;
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
