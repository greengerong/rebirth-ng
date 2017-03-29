import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SelectButtonItem } from '../../exports';

@Component({
  selector: 're-select-button-demo',
  templateUrl: './select-button-demo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectButtonDemoComponent implements OnInit {
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

  constructor() {
  }

  ngOnInit() {
  }

}
