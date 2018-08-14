import { Component } from '@angular/core';
import { CheckboxGroupComponent } from 'rebirth-ng';

@Component({
  selector: 're-checkbox-group-demo',
  templateUrl: './checkbox-group-demo.component.html'
})
export class CheckboxGroupDemoComponent {

  checked;
  yesno = 'YES';
  seasonLabelOptions = ['Spring', 'Summer', 'Autumn', 'Winter'];
  seasonLabel: string;

  seasonOptions = [
    { label: 'Spring', value: 'SPRING' },
    { label: 'Summer', value: 'SUMMER' },
    { label: 'Autumn', value: 'AUTUMN' },
    { label: 'Winter', value: 'WINTER' }
  ];

  season = [this.seasonOptions[1]];
  seasonValue = ['SUMMER'];
  valueParser = (item) => item && item.value;

  selectAll(checkboxGroup: CheckboxGroupComponent, selectAll) {
    if (selectAll) {
      return checkboxGroup.selectAll();
    }
    checkboxGroup.unselectAll();
  }

  invertAll(checkboxgroup) {
    checkboxgroup.invertSelect();
  }
}
