import {
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef,
  ElementRef,
  ComponentFactoryResolver,
  Injector,
  Renderer2
} from '@angular/core';
import { PopoverPopupComponent } from './popover-popup.component';
import { PositionService } from '../position/positioning.service';
import { Tooltip } from '../tooltip/tooltip';

@Directive({
  selector: '[rePopover]',
  exportAs: 'popover'
})
export class PopoverDirective extends Tooltip<PopoverPopupComponent> {
  @Input('reTitle') title: string | TemplateRef<any>;
  @Input('rePopover') content: string | TemplateRef<any>;

  constructor(viewContainerRef: ViewContainerRef,
              elementRef: ElementRef,
              componentFactoryResolver: ComponentFactoryResolver,
              injector: Injector,
              positionService: PositionService,
              renderer: Renderer2) {
    super(viewContainerRef, elementRef, componentFactoryResolver, injector, positionService, renderer);
    this.tooltipPopupType = PopoverPopupComponent;
    this.trigger = 'click';
  }

  protected fillPopup(): PopoverPopupComponent {
    const popupComponent = super.fillPopup();
    popupComponent.title = this.title;
    return popupComponent;
  }

  getContent(): string|TemplateRef<any> {
    return this.content;
  }

}
