import { Component, ChangeDetectionStrategy, Type, Input } from '@angular/core';

@Component({
  selector: 're-doc',
  templateUrl: './doc.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DocComponent {

  @Input() component: { name: string, cmp: Type<any> };

  constructor() {
  }
}
