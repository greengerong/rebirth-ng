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
  gettingStarted = {
    readMe: require('!html-loader!markdown-loader!../../exports/README.md')
  };

  components: { name: string, cmp: Type<any>, directory?: string, readMe?: string, html?: string, ts?: string }[] = [
    {
      name: 'Modal',
      directory: 'modal',
      cmp: ModalDemoComponent,
      readMe: require('!html-loader!markdown-loader!../../exports/modal/README.md'),
      html: require('!raw-loader!../../demo/modal/modal-demo.component.html'),
      ts: require('!raw-loader!../../demo/modal/modal-demo.component.ts'),
    },
    {
      name: 'Dialog',
      directory: 'dialog',
      cmp: DialogDemoComponent,
      readMe: require('!html-loader!markdown-loader!../../exports/dialog/README.md'),
      html: require('!raw-loader!../../demo/dialog/dialog-demo.component.html'),
      ts: require('!raw-loader!../../demo/dialog/dialog-demo.component.ts'),
    },
    {
      name: 'AlertBox',
      directory: 'alert-box',
      cmp: AlertBoxDemoComponent,
      readMe: require('!html-loader!markdown-loader!../../exports/alert-box/README.md'),
      html: require('!raw-loader!../../demo/alert-box/alert-box-demo.component.html'),
      ts: require('!raw-loader!../../demo/alert-box/alert-box-demo.component.ts'),
    },
    {
      name: 'Badge',
      directory: 'badge',
      cmp: BadgeDemoComponent,
      readMe: require('!html-loader!markdown-loader!../../exports/badge/README.md'),
      html: require('!raw-loader!../../demo/badge/badge-demo.component.html'),
      ts: require('!raw-loader!../../demo/badge/badge-demo.component.ts'),
    },
    {
      name: 'Pagination',
      directory: 'pagination',
      cmp: PaginationDemoComponent,
      readMe: require('!html-loader!markdown-loader!../../exports/pagination/README.md'),
      html: require('!raw-loader!../../demo/pagination/pagination-demo.component.html'),
      ts: require('!raw-loader!../../demo/pagination/pagination-demo.component.ts'),
    },
    {
      name: 'Pager',
      directory: 'pager',
      cmp: PagerDemoComponent,
      readMe: require('!html-loader!markdown-loader!../../exports/pager/README.md'),
      html: require('!raw-loader!../../demo/pager/pager-demo.component.html'),
      ts: require('!raw-loader!../../demo/pager/pager-demo.component.ts'),
    },
    {
      name: 'Panel',
      directory: 'panel',
      cmp: PanelDemoComponent,
      readMe: require('!html-loader!markdown-loader!../../exports/panel/README.md'),
      html: require('!raw-loader!../../demo/panel/panel-demo.component.html'),
      ts: require('!raw-loader!../../demo/panel/panel-demo.component.ts'),
    },
    {
      name: 'Accordion',
      directory: 'accordion',
      cmp: AccordionDemoComponent,
      readMe: require('!html-loader!markdown-loader!../../exports/accordion/README.md'),
      html: require('!raw-loader!../../demo/accordion/accordion-demo.component.html'),
      ts: require('!raw-loader!../../demo/accordion/accordion-demo.component.ts'),
    },
    {
      name: 'ActionButton',
      directory: 'action-button',
      cmp: ActionButtonDemoComponent,
      readMe: require('!html-loader!markdown-loader!../../exports/action-button/README.md'),
      html: require('!raw-loader!../../demo/action-button/action-button-demo.component.html'),
      ts: require('!raw-loader!../../demo/action-button/action-button-demo.component.ts'),
    },
    {
      name: 'Rating',
      directory: 'rating',
      cmp: RatingDemoComponent,
      readMe: require('!html-loader!markdown-loader!../../exports/rating/README.md'),
      html: require('!raw-loader!../../demo/rating/rating-demo.component.html'),
      ts: require('!raw-loader!../../demo/rating/rating-demo.component.ts'),
    },
    {
      name: 'Tabs',
      directory: 'tabs',
      cmp: TabsDemoComponent,
      readMe: require('!html-loader!markdown-loader!../../exports/tabs/README.md'),
      html: require('!raw-loader!../../demo/tabs/tabs-demo.component.html'),
      ts: require('!raw-loader!../../demo/tabs/tabs-demo.component.ts'),
    },
    {
      name: 'Tooltip',
      directory: 'tooltip',
      cmp: TooltipDemoComponent,
      readMe: require('!html-loader!markdown-loader!../../exports/tooltip/README.md'),
      html: require('!raw-loader!../../demo/tooltip/tooltip-demo.component.html'),
      ts: require('!raw-loader!../../demo/tooltip/tooltip-demo.component.ts'),
    },
    {
      name: 'Popover',
      directory: 'popover',
      cmp: PopoverDemoComponent,
      readMe: require('!html-loader!markdown-loader!../../exports/popover/README.md'),
      html: require('!raw-loader!../../demo/popover/popover-demo.component.html'),
      ts: require('!raw-loader!../../demo/popover/popover-demo.component.ts'),
    },
    {
      name: 'DatePicker',
      directory: 'date-picker',
      cmp: DatePickerDemoComponent,
      readMe: require('!html-loader!markdown-loader!../../exports/date-picker/README.md'),
      html: require('!raw-loader!../../demo/date-picker/date-picker-demo.component.html'),
      ts: require('!raw-loader!../../demo/date-picker/date-picker-demo.component.ts'),
    },
    // component declare
  ];
}
