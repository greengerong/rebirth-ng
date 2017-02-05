import { Component, OnInit, Type, ViewContainerRef } from '@angular/core';
import { RebirthUIConfig } from './exports/rebirth-ui.config';
import {
  ModalDemoComponent,
  DialogDemoComponent,
  AlertBoxDemoComponent,
  BadgeDemoComponent,
  PaginationDemoComponent,
  PagerDemoComponent,
  PanelDemoComponent,
  AccordionDemoComponent,
  ActionButtonDemoComponent,
  RatingDemoComponent,
  TabsDemoComponent,
  TooltipDemoComponent,
  PopoverDemoComponent,
  DatePickerDemoComponent
} from './demo';

@Component({
  selector: 're-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  components: Type<any>[];

  constructor(private rebirthConfig: RebirthUIConfig, private viewContainerRef: ViewContainerRef) {
    this.rebirthConfig.rootContainer = this.viewContainerRef;
  }

  ngOnInit(): void {

    this.components = [
      ModalDemoComponent,
      DialogDemoComponent,
      AlertBoxDemoComponent,
      BadgeDemoComponent,
      PaginationDemoComponent,
      PagerDemoComponent,
      PanelDemoComponent,
      AccordionDemoComponent,
      ActionButtonDemoComponent,
      RatingDemoComponent,
      TabsDemoComponent,
      TooltipDemoComponent,
      PopoverDemoComponent,
      DatePickerDemoComponent
    ] .sort((a: Type<any>, b: Type<any>) => a.name.localeCompare(b.name));
  }

}
