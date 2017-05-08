import { Component } from '@angular/core';

@Component({
  selector: 're-checkbox-group-demo',
  templateUrl: './checkbox-group-demo.component.html'
})
export class CheckboxGroupDemoComponent {

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
  valueParser = (item) => item.value;

}
