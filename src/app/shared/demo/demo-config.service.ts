import { Injectable, Type } from '@angular/core';
import {
  MenuBarDemoComponent,
  ValidatorsDemoComponent,
} from '../../demo';

@Injectable()
export class DemoConfigService {

  gettingStarted = {
    readMe: require('!html-loader!markdown-loader!../../exports/README.md')
  };

  components: { name: string, cmp: Type<any>, directory?: string, readMe?: any, html?: string, ts?: string, data?: any }[] = [
    {
      name: 'Validators',
      directory: 'validators',
      cmp: ValidatorsDemoComponent,
      readMe: require('!html-loader!markdown-loader!../../exports/validators/README.md'),
      html: require('!raw-loader!../../demo/validators/validators-demo.component.html'),
      ts: require('!raw-loader!../../demo/validators/validators-demo.component.ts'),
    },
    {
      name: 'MenuBar',
      directory: 'menu-bar',
      cmp: MenuBarDemoComponent,
      readMe: require('!html-loader!markdown-loader!../../exports/menu-bar/README.md'),
      html: require('!raw-loader!../../demo/menu-bar/menu-bar-demo.component.html'),
      ts: require('!raw-loader!../../demo/menu-bar/menu-bar-demo.component.ts'),
    },
    // component declare
  ];
}
