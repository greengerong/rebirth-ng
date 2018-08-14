import { Component } from '@angular/core';
import { ActionItem } from 'rebirth-ng';

@Component({
  selector: 're-action-button-demo',
  templateUrl: './action-button-demo.component.html'
})
export class ActionButtonDemoComponent {
  isActionOpen: boolean;
  disabledActionOpen = true;
  actions: ActionItem[] = [
    {
      text: 'Action Header',
      header: true
    },
    {
      id: 1,
      text: 'Save',
      icon: 'glyphicon glyphicon-floppy-save'
    }, {
      id: 2,
      text: 'Refresh',
      icon: 'glyphicon glyphicon-refresh'
    },
    {
      divider: true
    },
    {
      id: 3,
      text: 'Remove',
      icon: 'glyphicon glyphicon-remove'
    }];

  onActionClick(item: ActionItem) {
    console.log(`Action item ${item.id} clicked`, item);
  }
}
