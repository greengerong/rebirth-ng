import { NgModule } from '@angular/core';

import { DroppableDirective } from './droppable.directive';
import { DraggableDirective, DraggableHandleDirective } from './draggable.directive';

@NgModule({
  imports: [],
  exports: [DraggableDirective, DraggableHandleDirective, DroppableDirective],
  declarations: [DraggableDirective, DraggableHandleDirective, DroppableDirective],
  providers: [],
})
export class DraggableModule {
}
