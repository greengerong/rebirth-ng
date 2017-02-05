import { Injectable, Type } from '@angular/core';
import {
  ModalDemoComponent,
  DialogDemoComponent,
  AlertBoxDemoComponent,
  BadgeDemoComponent,
  PaginationDemoComponent,
  PagerDemoComponent,
  PanelDemoComponent,
  AccordionDemoComponent,
  ActionButtonDemoComponent,
  RatingDemoComponent,
  TabsDemoComponent,
  TooltipDemoComponent,
  PopoverDemoComponent,
  DatePickerDemoComponent,
  // component import
} from '../../demo';

@Injectable()
export class DemoConfigService {
  components: { name: string, cmp: Type<any>, readMe?: string, html?: string, ts?: string }[] = [
    {
      name: 'Modal',
      cmp: ModalDemoComponent,
      readMe: require('!html-loader!markdown-loader!../../exports/modal/README.md'),
      html: require('!raw-loader!../../demo/modal/modal-demo.component.html'),
      ts: require('!raw-loader!../../demo/modal/modal-demo.component.ts'),
    },
    {
      name: 'Dialog',
      cmp: DialogDemoComponent,
      readMe: require('!html-loader!markdown-loader!../../exports/dialog/README.md'),
      html: require('!raw-loader!../../demo/dialog/dialog-demo.component.html'),
      ts: require('!raw-loader!../../demo/dialog/dialog-demo.component.ts'),
    },
    {
      name: 'AlertBox',
      cmp: AlertBoxDemoComponent,
      readMe: require('!html-loader!markdown-loader!../../exports/alert-box/README.md'),
      html: require('!raw-loader!../../demo/alert-box/alert-box-demo.component.html'),
      ts: require('!raw-loader!../../demo/alert-box/alert-box-demo.component.ts'),
    },
    {
      name: 'Badge',
      cmp: BadgeDemoComponent,
      readMe: require('!html-loader!markdown-loader!../../exports/badge/README.md'),
      html: require('!raw-loader!../../demo/badge/badge-demo.component.html'),
      ts: require('!raw-loader!../../demo/badge/badge-demo.component.ts'),
    },
    {
      name: 'Pagination',
      cmp: PaginationDemoComponent,
      readMe: require('!html-loader!markdown-loader!../../exports/pagination/README.md'),
      html: require('!raw-loader!../../demo/pagination/pagination-demo.component.html'),
      ts: require('!raw-loader!../../demo/pagination/pagination-demo.component.ts'),
    },
    {
      name: 'Pager',
      cmp: PagerDemoComponent,
      readMe: require('!html-loader!markdown-loader!../../exports/modal/README.md'),
      html: require('!raw-loader!../../demo/modal/modal-demo.component.html'),
      ts: require('!raw-loader!../../demo/modal/modal-demo.component.ts'),
    },
    {
      name: 'Panel',
      cmp: PanelDemoComponent,
      readMe: require('!html-loader!markdown-loader!../../exports/modal/README.md'),
      html: require('!raw-loader!../../demo/modal/modal-demo.component.html'),
      ts: require('!raw-loader!../../demo/modal/modal-demo.component.ts'),
    },
    {
      name: 'Accordion',
      cmp: AccordionDemoComponent,
      readMe: require('!html-loader!markdown-loader!../../exports/modal/README.md'),
      html: require('!raw-loader!../../demo/modal/modal-demo.component.html'),
      ts: require('!raw-loader!../../demo/modal/modal-demo.component.ts'),
    },
    {
      name: 'ActionButton',
      cmp: ActionButtonDemoComponent,
      readMe: require('!html-loader!markdown-loader!../../exports/modal/README.md'),
      html: require('!raw-loader!../../demo/modal/modal-demo.component.html'),
      ts: require('!raw-loader!../../demo/modal/modal-demo.component.ts'),
    },
    {
      name: 'Rating',
      cmp: RatingDemoComponent,
      readMe: require('!html-loader!markdown-loader!../../exports/modal/README.md'),
      html: require('!raw-loader!../../demo/modal/modal-demo.component.html'),
      ts: require('!raw-loader!../../demo/modal/modal-demo.component.ts'),
    },
    {
      name: 'Tabs',
      cmp: TabsDemoComponent,
      readMe: require('!html-loader!markdown-loader!../../exports/modal/README.md'),
      html: require('!raw-loader!../../demo/modal/modal-demo.component.html'),
      ts: require('!raw-loader!../../demo/modal/modal-demo.component.ts'),
    },
    {
      name: 'Tooltip',
      cmp: TooltipDemoComponent,
      readMe: require('!html-loader!markdown-loader!../../exports/modal/README.md'),
      html: require('!raw-loader!../../demo/modal/modal-demo.component.html'),
      ts: require('!raw-loader!../../demo/modal/modal-demo.component.ts'),
    },
    {
      name: 'Popover',
      cmp: PopoverDemoComponent,
      readMe: require('!html-loader!markdown-loader!../../exports/modal/README.md'),
      html: require('!raw-loader!../../demo/modal/modal-demo.component.html'),
      ts: require('!raw-loader!../../demo/modal/modal-demo.component.ts'),
    },
    {
      name: 'DatePicker',
      cmp: DatePickerDemoComponent,
      readMe: require('!html-loader!markdown-loader!../../exports/modal/README.md'),
      html: require('!raw-loader!../../demo/modal/modal-demo.component.html'),
      ts: require('!raw-loader!../../demo/modal/modal-demo.component.ts'),
    },
    // component declare
  ];
}
