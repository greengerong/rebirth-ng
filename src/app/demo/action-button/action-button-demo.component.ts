import { Component, OnInit } from '@angular/core';
import { ActionItem } from '../../exports/action-button/action-item.model';

@Component({
  selector: 're-action-button-demo',
  templateUrl: './action-button-demo.component.html'
})
export class ActionButtonDemoComponent implements OnInit {
  isActionOpen: boolean;
  disabledActionOpen = true;
  actions: ActionItem[] = [{ id: 1, text: 'Save' }, { id: 2, text: 'Refresh' }, { divider: true }, {
    id: 3,
    text: 'Remove'
  }];

  constructor() {
  }

  ngOnInit() {
  }

  onActionClick(item: ActionItem) {
    console.log(`Action item ${item.id} clicked`, item);
  }
}
