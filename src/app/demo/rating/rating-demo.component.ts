import { Component, OnInit } from '@angular/core';

@Component({
  selector: 're-rating-demo',
  templateUrl: './rating-demo.component.html'
})
export class RatingDemoComponent implements OnInit {
  disabled = false;
  rating: any = {
    value: 3,
    max: 10
  };
  icons = { stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle' };

  constructor() {
  }

  ngOnInit() {
  }

}
