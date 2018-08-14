import { Component } from '@angular/core';
import { GroupOption } from 'rebirth-ng';

@Component({
  selector: 're-select-demo',
  templateUrl: './select-demo.component.html'
})
export class SelectDemoComponent {
  options = ['Tyler', 'Lucy', 'Jack'];
  selectValue = 'Jack';
  objOptions = this.options.map((label, id) => ({
    id, label
  }));
  selectObjValue = this.objOptions[2];
  selectGroupValue: any;
  groupOptions: GroupOption[] = [
    {
      group: 'Manager',
      options: ['Tyler']
    },
    {
      group: 'Engineer',
      options: ['Lucy', 'Jack']
    }
  ]
  ;
}
