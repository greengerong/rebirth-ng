import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DocComponent } from './doc';
import { DocContentComponent } from './doc/doc-content.component';
import { DemoConfigService } from './demo/demo-config.service';
import { ThemeService } from './theme';
import { RebirthNGModule } from '../exports/rebirth-ng.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    RebirthNGModule
  ],
  declarations: [
    DocComponent,
    DocContentComponent
  ],
  providers: [],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    DocComponent
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        { provide: DemoConfigService, useClass: DemoConfigService },
        { provide: ThemeService, useClass: ThemeService }
      ]
    };
  }
}
