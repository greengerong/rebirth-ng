import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataTableDemoComponent, AVGPipe, ModalPeopleComponent } from './data-table-demo.component';
import { RebirthNGModule } from '../../exports';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, RebirthNGModule, FormsModule],
  exports: [DataTableDemoComponent],
  declarations: [DataTableDemoComponent, AVGPipe, ModalPeopleComponent],
  providers: [],
  entryComponents: [DataTableDemoComponent, ModalPeopleComponent]
})
export class DataTableDemoModule {
}
