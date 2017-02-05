import { Component, ChangeDetectionStrategy, Type, Input } from '@angular/core';

@Component({
  selector: 're-doc',
  templateUrl: './doc.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DocComponent {

  cmp: Type<any>;
  componentId: string;

  constructor() {
  }

  @Input() set component(cmp: Type<any>) {
    this.cmp = cmp;
    this.onComponentChange();
  }

  get component() {
    return this.cmp;
  }

  onComponentChange() {
    const name = this.component.name;
    this.componentId = name.replace('DemoComponent', '');
  }

}
