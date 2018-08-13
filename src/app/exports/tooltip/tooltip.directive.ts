import {
  Directive,
  Input,
  ViewContainerRef,
  ComponentFactoryResolver,
  Injector,
  ElementRef,
  Renderer2,
  TemplateRef
} from '@angular/core';
import { PositionService } from '../position/positioning.service';
import { Tooltip } from './tooltip';
import { TooltipPopupComponent } from './tooltip-popup.component';
import { RebirthNGConfig } from '../rebirth-ng.config';

@Directive({
  selector: '[reTooltip]',
  exportAs: 'tooltip'
})
export class TooltipDirective extends Tooltip<TooltipPopupComponent> {
  @Input('reTooltip') content: string | TemplateRef<any>;

  constructor(viewContainerRef: ViewContainerRef,
              elementRef: ElementRef,
              componentFactoryResolver: ComponentFactoryResolver,
              injector: Injector,
              positionService: PositionService,
              renderer: Renderer2,
              rebirthNGConfig: RebirthNGConfig) {
    super(viewContainerRef, elementRef, componentFactoryResolver, injector, positionService, renderer, rebirthNGConfig);
    this.tooltipPopupType = TooltipPopupComponent;
  }

  getContent(): string | TemplateRef<any> {
    return this.content;
  }

}
