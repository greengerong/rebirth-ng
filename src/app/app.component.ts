import { Component, OnInit, Type, ViewContainerRef } from '@angular/core';
import { RebirthUIConfig } from './exports/rebirth-ui.config';
import { DemoConfigService } from './shared/demo/demo-config.service';
import { MenuBar } from './exports/menu-bar/menu-bar.model';

@Component({
  selector: 're-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  components: any[];
  gettingStarted: any;
  menus: MenuBar;

  constructor(private rebirthConfig: RebirthUIConfig,
              private viewContainerRef: ViewContainerRef,
              private demoConfigService: DemoConfigService) {
    this.rebirthConfig.rootContainer = this.viewContainerRef;
  }

  ngOnInit(): void {
    this.gettingStarted = this.demoConfigService.gettingStarted;
    this.components = this.demoConfigService.components
      .sort((a, b) => a.name.localeCompare(b.name));

    const cmpMenus = this.components.map(item => {
      return {
        text: item.name,
        url: `#${item.name}`
      };
    });

    this.menus = {
      logo: 'http://greengerong.com/rebirth/assets/img/wolf2.png',
      title: '破狼博客',
      home: './',
      menus: [
        {
          text: '@Rebirth/UI',
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
          url: '/ng2-rebirth-ui/compodocs/overview.html',
          target: '_blank',
          icon: 'glyphicon glyphicon-heart'
        },
        {
          text: '@Github',
          url: 'https://github.com/greengerong/ng2-rebirth-ui',
          target: '_blank',
          icon: 'glyphicon glyphicon-user'
        }
      ]
    };
  }

}
