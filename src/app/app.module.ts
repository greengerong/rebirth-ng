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
  SelectButtonDemoModule,
  OverlayDemoModule,
  CarouselDemoModule,
  SwitchDemoModule,
  MenuBarDemoModule,
  AutoCompleteDemoModule,
  FlowStepDemoModule,
  InfiniteScrollDemoModule,
  DataTableDemoModule,
  DraggableDemoModule,
  FileUploadDemoModule,
  TimePickerDemoModule,
  RadioGroupDemoModule,
  CheckboxGroupDemoModule,
  ValidatorsDemoModule,
  NotifyDemoModule,
  TreeViewDemoModule,
  EllipsisDemoModule
} from './demo';
import { RebirthNGModule } from './exports';
import { RouteReuseStrategy, RouterModule } from '@angular/router';
// NoopAnimationsModule
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ROUTER_CONFIG } from './app.route';
import { GettingStartedComponent, ShowcaseComponent } from './feature';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { RebirthRouterReuseStrategy } from './exports';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    GettingStartedComponent,
    ShowcaseComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    RouterModule.forRoot(ROUTER_CONFIG),
    SharedModule.forRoot(),
    RebirthNGModule.forRoot(),
    BrowserAnimationsModule,
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
    SelectButtonDemoModule,
    OverlayDemoModule,
    CarouselDemoModule,
    SwitchDemoModule,
    MenuBarDemoModule,
    AutoCompleteDemoModule,
    FlowStepDemoModule,
    DataTableDemoModule,
    InfiniteScrollDemoModule,
    DraggableDemoModule,
    FileUploadDemoModule,
    TimePickerDemoModule,
    RadioGroupDemoModule,
    CheckboxGroupDemoModule,
    ValidatorsDemoModule,
    NotifyDemoModule,
    TreeViewDemoModule,
    EllipsisDemoModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: RouteReuseStrategy, useClass: RebirthRouterReuseStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}


