import {
  Component,
  OnInit,
  QueryList,
  ContentChildren,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy, AfterContentInit
} from '@angular/core';
import { TabComponent } from './tab.component';
import { RebirthUIConfig } from '../rebirth-ui.config';

@Component({
  selector: 're-tabs',
  templateUrl: './tabs.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabsComponent implements OnInit, AfterContentInit {
  @Input() type: 'tabs' | 'pills';
  @Input() activeTab: number |string;
  @Input() vertical: boolean;
  @Input() justified: boolean;
  @Input() cssClass: string;
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;
  @Output() activeTabChange = new EventEmitter<number| string>();

  constructor(private rebirthUIConfig: RebirthUIConfig) {
    this.type = <any>rebirthUIConfig.tabs.type;
    this.justified = rebirthUIConfig.tabs.justified;
    this.vertical = rebirthUIConfig.tabs.vertical;
  }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    if (this.activeTab === undefined && this.tabs.length) {
      this.select(this.tabs.first.id);
    }
  }

  select(id: number | string) {
    const tab = this.tabs.find(item => item.id === id);
    if (tab && !tab.disabled) {
      this.activeTab = id;
      this.activeTabChange.emit(id);
    }
  }

}
