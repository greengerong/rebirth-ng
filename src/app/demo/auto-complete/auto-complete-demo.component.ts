import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 're-auto-complete-demo',
  templateUrl: './auto-complete-demo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'autocomplete': 'off',
    'autocapitalize': 'off',
    'autocorrect': 'off'
  },
})
export class AutoCompleteDemoComponent implements OnInit {
  selectItem: any;

  constructor() {
  }

  ngOnInit() {
  }

}
