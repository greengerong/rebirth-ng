import {
  Component, Input, Output, EventEmitter, ChangeDetectionStrategy, Optional, OnInit, Host,
  OnDestroy
} from '@angular/core';
import { PanelGroup } from './panel-group.model';
import { RebirthUIConfig } from '../rebirth-ui.config';

@Component({
  selector: 're-panel,re-accordion-item',
  templateUrl: './panel.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: 'panel'
})
export class PanelComponent implements OnInit, OnDestroy {
  @Input() id;
  @Input() type: 'default'| 'success' | 'info' | 'warning' | 'danger';
  @Input() closable: boolean;
  @Input() collapsable: boolean;
  @Input() isCollapsed = false;
  @Input() cssClass: string;
  @Output() close = new EventEmitter<PanelComponent>();
  @Output() collapse = new EventEmitter<boolean>();

  constructor(@Optional() @Host() private  panelGroup: PanelGroup, private rebirthUIConfig: RebirthUIConfig) {
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
    $event.stopPropagation();
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
