import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { ModalDemoModule } from './demo';
import { RebirthUIModule } from './exports';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    RebirthUIModule.forRoot(),
    ModalDemoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}


