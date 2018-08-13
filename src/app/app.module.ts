import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { MenuBarDemoModule, ValidatorsDemoModule, } from './demo';
import { RebirthNGModule, RebirthRouterReuseStrategy } from './exports';
import { RouteReuseStrategy, RouterModule } from '@angular/router';
// NoopAnimationsModule
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ROUTER_CONFIG } from './app.route';
import { GettingStartedComponent, ShowcaseComponent } from './feature';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';

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
    MenuBarDemoModule,
    ValidatorsDemoModule,
    // module declare
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: RouteReuseStrategy, useClass: RebirthRouterReuseStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}


