import { Component, OnInit, QueryList, ContentChildren, Input, Output, EventEmitter } from '@angular/core';
import { TabComponent } from './tab.component';

@Component({
  selector: 're-tabs',
  templateUrl: './tabs.component.html'
})
export class TabsComponent implements OnInit {
  @Input() type: 'tabs' | 'pills';
  @Input() activeTab: number |string;
  @Input() cssClass: string;
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;
  @Output() activeTabChange = new EventEmitter<number| string>();

  constructor() {
  }

  ngOnInit() {
  }

  select(id: number | string) {
    const tab = this.tabs.find(item => item.id === id);
    if (tab && !tab.disabled) {
      this.activeTab = id;
      this.activeTabChange.emit(id);
    }
  }

}
