import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import {
  ModalDemoModule,
  DialogDemoModule,
  AlertBoxDemoModule,
  BadgeDemoModule,
  PaginationDemoModule,
  PagerDemoModule,
  PanelDemoModule,
  AccordionDemoModule,
  ActionButtonDemoModule,
  RatingDemoModule,
  TabsDemoModule,
  TooltipDemoModule,
  PopoverDemoModule,
  DatePickerDemoModule,
  BreadcrumbsDemoModule,
  ProgressBarDemoModule,
  SelectButtonDemoModule
} from './demo';
import { RebirthUIModule } from './exports';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule.forRoot(),
    RebirthUIModule.forRoot(),
    ModalDemoModule,
    DialogDemoModule,
    PagerDemoModule,
    PaginationDemoModule,
    AlertBoxDemoModule,
    BadgeDemoModule,
    PanelDemoModule,
    AccordionDemoModule,
    ActionButtonDemoModule,
    RatingDemoModule,
    TabsDemoModule,
    TooltipDemoModule,
    PopoverDemoModule,
    DatePickerDemoModule,
    BreadcrumbsDemoModule,
    ProgressBarDemoModule,
    SelectButtonDemoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}


