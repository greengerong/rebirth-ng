import { Component } from '@angular/core';

@Component({
  selector: 're-rating-demo',
  templateUrl: './rating-demo.component.html'
})
export class RatingDemoComponent {
  disabled = false;
  rating: any = {
    value: 3,
    max: 10
  };
  icons = { stateOn: 'glyphicon glyphicon-heart', stateOff: 'glyphicon glyphicon-ban-circle' };

}
