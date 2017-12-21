import { Component } from '@angular/core';

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
}
