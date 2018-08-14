import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { MenuBar } from 'rebirth-ng';

@Component({
  selector: 're-menu-bar-demo',
  templateUrl: './menu-bar-demo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuBarDemoComponent implements OnInit {
  type: 'navbar-fixed-top' | 'navbar-fixed-bottom' | 'container-fluid'
    | 'navbar-static-top' | 'navbar-static-bottom' | 'navbar-form' | 'sidebar';
  types = ['navbar-fixed-top', 'navbar-fixed-bottom', 'container-fluid', 'navbar-static-top',
    'navbar-static-bottom', 'navbar-form'];

  @ViewChild('volumeTemplate') volumeTemplate;
  menus: MenuBar;
  messages = 10;

  ngOnInit() {
    this.menus = this.demoMenus();
  }

  private demoMenus() {
    return {
      logo: 'https://greengerong.github.io/rebirth/assets/img/wolf2.png',
      title: '破狼博客',
      home: './',
      menus: [
        {
          text: 'Home',
          icon: 'glyphicon glyphicon-home',
          router: ['./']
        },
        {
          text: 'Profile',
          icon: 'glyphicon glyphicon-user',
          router: ['./profile', 'greengerong']
        },
        {
          text: 'Rebirth',
          icon: 'glyphicon glyphicon-heart',
          router: ['./rebirth', { portal: 'rebirth-ng' }]
        },
        {
          text: 'Resources',
          icon: 'glyphicon glyphicon-fire',
          children: [
            {
              text: 'Resource',
              header: true
            },
            {
              text: 'Blog',
              url: 'https://greengerong.github.io/rebirth/blog/home',
              target: '_blank'
            },
            {
              text: 'Questions'
            },
            {
              divider: true
            },
            {
              text: 'Books',
              header: true
            },
            {
              text: 'Angular.js best practices',
              icon: 'glyphicon glyphicon-book',
              url: 'http://item.jd.com/11845736.html',
              target: '_blank'
            },
            {
              text: 'NG-Book2',
              icon: 'glyphicon glyphicon-book',
              url: '#'
            }
          ]
        }
      ],
      rightMenus: [
        {
          itemTemplate: this.volumeTemplate,
          icon: 'glyphicon glyphicon-volume-up',
          url: '#MenuBar',
        },
        {
          icon: 'glyphicon glyphicon-user',
          target: '_blank',
          children: [
            {
              text: 'Profile',
              url: '#MenuBar'
            },
            {
              text: 'Settings',
              url: '#MenuBar'
            },
            {
              text: 'Logout',
              url: '#MenuBar'
            },
          ]
        }
      ]
    };
  }

}
