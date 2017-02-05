import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { DocComponent } from './doc';
import { DocContentComponent } from './doc/doc-content.component';
import { DemoConfigService } from './demo/demo-config.service';
import { RebirthUIModule } from '../exports/rebirth-ui.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RebirthUIModule
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
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        { provide: DemoConfigService, useClass: DemoConfigService }
      ]
    };
  }
}
