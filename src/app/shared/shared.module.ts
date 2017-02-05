import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { DocComponent } from './doc';
import { DocContentComponent } from './doc/doc-content.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    JsonpModule,
  ],
  declarations: [
    DocComponent,
    DocContentComponent
  ],
  providers: [],
  exports: [
    CommonModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    DocComponent
  ]
})
export class SharedModule {

}
