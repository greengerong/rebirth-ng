import { Component } from '@angular/core';
import { DialogService } from 'rebirth-ng';

@Component({
  selector: 're-tabs-demo',
  templateUrl: './tabs-demo.component.html'
})
export class TabsDemoComponent {
  tab = { activeId: 'tab2' };
  tabItems = [
    {
      id: 'tab1',
      title: 'home',
      disabled: true,
      content: `Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth
            master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro
            keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat
            salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.`
    },
    {
      id: 'tab2',
      title: 'Profile',
      content: `Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1
            labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer
            twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl
            cillum
            PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr,
            vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable
            jean
            shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher
            vero sint qui sapiente accusamus tattooed echo park.`
    },
    {
      id: 'tab3',
      title: 'Fat',
      content: `Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny
            pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard
            locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid
            8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro
            mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown.
            Pitchfork sustainable tofu synth chambray yr.`
    },
  ];

  constructor(private dialogService: DialogService) {

  }

  alert(id) {
    this.dialogService.alert({
      title: 'Tab alert',
      content: `Get tab id <strong>${id}</strong>.`,
      html: true
    })
      .subscribe(
        data => console.log('Rebirth alert get yes result:', data),
        error => console.error('Rebirth alert get no result:', error)
      );
  }

}
