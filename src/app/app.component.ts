import { Component, OnInit, ViewContainerRef, Renderer2, ElementRef } from '@angular/core';
import { RebirthNGConfig, MenuBar } from 'rebirth-ng';
import { DemoConfigService } from './shared/demo/demo-config.service';
import { ThemeService } from './shared';
import { DomSanitizer } from '@angular/platform-browser';

// import { REBIRTH_NG_I18N_ZHCN } from './exports';

@Component({
  selector: 're-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  components: any[];
  menus: MenuBar;
  pkg = require('../../projects/rebirth-ng/package.json');

  constructor(private rebirthConfig: RebirthNGConfig,
              private viewContainerRef: ViewContainerRef,
              private demoConfigService: DemoConfigService,
              private  themeService: ThemeService,
              private  renderer: Renderer2,
              private elementRef: ElementRef,
              private domSanitizer: DomSanitizer) {

    this.rebirthConfig.rootContainer = this.viewContainerRef;
    // this.rebirthConfig.extend(REBIRTH_NG_I18N_ZHCN);  // i18n
  }

  ngOnInit(): void {
    this.themeService.setupTheme('', this.renderer, this.elementRef);

    this.components = this.demoConfigService.components
      .sort((a, b) => a.name.localeCompare(b.name));

    this.setupMenus();
  }

  private changeTheme(menu) {
    this.themeService.setupTheme(menu.text, this.renderer, this.elementRef);
  }

  private setupMenus() {
    const cmpMenus = this.components.map(item => {
      return {
        text: item.name,
        router: [`/component/${item.name}`]
      };
    });


    const changeThemeHandler = (item) => this.changeTheme(item);

    this.menus = {
      logo: 'https://greengerong.github.io/rebirth/assets/img/wolf2.png',
      title: '破狼博客',
      home: ['/gettingStarted'],
      menus: [
        {
          text: '@Rebirth/NG ' + this.pkg.version,
          router: ['/gettingStarted'],
          icon: 'glyphicon glyphicon-home'
        },
        {
          text: 'Components',
          children: cmpMenus,
          icon: 'glyphicon glyphicon-fire'
        },
        {
          text: 'Advance Components',
          icon: 'glyphicon glyphicon-fire',
          children: [
            {
              text: 'Rebirth-ng',
              url: 'https://greengerong.github.io/rebirth-ng/'
            },
            {
              text: 'Rebirth-http',
              url: 'https://github.com/greengerong/rebirth-http'
            },
            {
              text: 'Rebirth-permission',
              url: 'https://github.com/greengerong/rebirth-permission'
            },
            {
              text: 'Rebirth-storage',
              url: 'https://github.com/greengerong/rebirth-storage'
            },
            {
              text: 'Rebirth-event-source',
              url: 'https://github.com/greengerong/rebirth-event-source'
            },
            {
              text: 'Rebirth-chart(Chartjs)',
              url: 'https://greengerong.github.io/rebirth-chart/'
            },
            {
              text: 'Rebirth-echarts(ECharts)',
              url: 'https://greengerong.github.io/rebirth-echarts/'
            },
            {
              text: 'rebirth-medium-editor(MediumEditor)',
              url: 'https://greengerong.github.io/rebirth-medium-editor/'
            },
            {
              text: 'Rebirth seed(rebirth-admin)',
              url: 'https://github.com/greengerong/rebirth-admin'
            },
          ]
        },
        {
          text: 'API Docs',
          url: '/rebirth-ng/compodocs/overview.html',
          target: '_blank',
          icon: 'glyphicon glyphicon-heart'
        },
        {
          text: '@Github',
          url: 'https://github.com/greengerong/rebirth-ng',
          target: '_blank',
          icon: 'glyphicon glyphicon-user'
        },
        {
          text: 'Themes',
          icon: 'glyphicon glyphicon-cog',
          children: [
            {
              text: 'Default',
              handler: changeThemeHandler
            },
            {
              text: 'Dark',
              handler: changeThemeHandler
            },
            {
              text: 'Cosmo',
              handler: changeThemeHandler
            },
            {
              text: 'Paper',
              handler: changeThemeHandler
            },
            {
              text: 'Journal',
              handler: changeThemeHandler
            },
            {
              text: 'Readable',
              handler: changeThemeHandler
            },
            {
              text: 'United',
              handler: changeThemeHandler
            },
            {
              text: 'Sandstone',
              handler: changeThemeHandler
            },
            // {
            //   text: 'Material-Design',
            //   url: '?theme=Material-Design'
            // }
          ]
        }
      ]
    };
  }
}
