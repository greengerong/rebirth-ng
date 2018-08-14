import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SelectButtonItem } from 'rebirth-ng';

@Component({
  selector: 're-select-button-demo',
  templateUrl: './select-button-demo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectButtonDemoComponent {
  value: string;
  multipleValue: string[];
  disabled = true;
  items: SelectButtonItem[] = [
    {
      text: 'Left'
    },
    {
      text: 'Middle'
    },
    {
      text: 'Right'
    }
  ];

}
