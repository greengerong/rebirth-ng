import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MenuBar } from '../../exports/menu-bar/menu-bar.model';

@Component({
  selector: 're-menu-bar-demo',
  templateUrl: './menu-bar-demo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuBarDemoComponent implements OnInit {
  type: NavbarType;
  types = ['navbar-fixed-top', 'navbar-fixed-bottom', 'container-fluid', 'navbar-static-top',
    'navbar-static-bottom', 'navbar-form'];

  menus: MenuBar = {
    logo: 'http://greengerong.com/rebirth/assets/img/wolf2.png',
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
        router: ['./rebirth', { portal: 'rebirth-ui' }]
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
            url: 'http://greengerong.com/rebirth/blog/home',
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
        icon: 'glyphicon glyphicon-volume-up',
        url: '#MenuBar',
      },
      {
        icon: 'glyphicon glyphicon-user',
        url: 'http://greengerong.com/rebirth/blog/about',
        target: '_blank'
      }
    ]
  };

  constructor() {
  }

  ngOnInit() {
  }

}
