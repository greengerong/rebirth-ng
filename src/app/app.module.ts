import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { ModalDemoModule, DialogDemoModule } from './demo';
import { RebirthUIModule } from './exports';
import { PagerDemoModule } from './demo/pager/pager-demo.module';
import { PaginationDemoModule } from './demo/pagination';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    RebirthUIModule.forRoot(),
    ModalDemoModule,
    DialogDemoModule,
    PagerDemoModule,
    PaginationDemoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}


