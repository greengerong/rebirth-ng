import { Component, OnInit, ViewContainerRef, Renderer2, ElementRef } from '@angular/core';
import { RebirthNGConfig } from './exports/rebirth-ng.config';
import { DemoConfigService } from './shared/demo/demo-config.service';
import { MenuBar } from './exports/menu-bar/menu-bar.model';
// import { REBIRTH_NG_I18N_ZHCN } from './exports/rebirth-ng.i18n.zh-cn';
import { ThemeService } from './shared';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 're-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  components: any[];
  gettingStarted: any;
  menus: MenuBar;
  // largeDataSource = [];

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
    this.gettingStarted = this.domSanitizer.bypassSecurityTrustHtml(this.demoConfigService.gettingStarted.readMe);
    this.components = this.demoConfigService.components
      .map(cmp => {
        cmp.readMe = this.domSanitizer.bypassSecurityTrustHtml(cmp.readMe);
        cmp.ts = this.fixTSModuleImport(cmp.ts);
        return cmp;
      })
      .sort((a, b) => a.name.localeCompare(b.name));

    this.setupMenus();

    // for (let i = 1; i <= 5000; i++) {
    //   this.largeDataSource.push({ id: i, name: `Name ${i}`, age: 10 });
    // }
  }

  private fixTSModuleImport(code): string {
    return code.replace(/\.\.\/\.\.\/exports(\/.*)?/, 'rebirth-ng');
  }

  private changeTheme(menu) {
    this.themeService.setupTheme(menu.text, this.renderer, this.elementRef);
  }

  private setupMenus() {
    const cmpMenus = this.components.map(item => {
      return {
        text: item.name,
        url: `#${item.name}`
      };
    });


    const changeThemeHandler = (item) => this.changeTheme(item);

    this.menus = {
      logo: 'https://greengerong.github.io/rebirth/assets/img/wolf2.png',
      title: '破狼博客',
      home: './',
      menus: [
        {
          text: '@Rebirth/NG',
          router: ['./'],
          icon: 'glyphicon glyphicon-home'
        },
        {
          text: 'Components',
          children: cmpMenus,
          icon: 'glyphicon glyphicon-fire'
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
