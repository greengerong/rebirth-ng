import {
  Component,
  ChangeDetectionStrategy,
  Pipe,
  PipeTransform,
  ComponentFactoryResolver,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 're-data-table-demo',
  templateUrl: './data-table-demo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataTableDemoComponent {

}
