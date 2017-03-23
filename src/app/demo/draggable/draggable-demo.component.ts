import { Component, OnInit } from '@angular/core';

@Component({
  selector: 're-draggable-demo',
  templateUrl: './draggable-demo.component.html'
})
export class DraggableDemoComponent implements OnInit {
  source = new Array(10).fill(0).map((_, index) => index + 1);
  target = [];

  constructor() {
  }

  ngOnInit() {
  }

  onDrop2Right($event) {
    const contextData = $event.dataTransfer.getData('text');
    const data = JSON.parse(contextData);
    console.log('drag data to right', data);
    this.source = this.source.filter(item => item !== data.data);
    this.target = [...this.target, data.data];
  }
}
