import {
  OnInit,
  Input,
  ViewContainerRef,
  ComponentFactoryResolver,
  Injector,
  ComponentRef,
  ElementRef,
  Renderer,
  HostListener,
  TemplateRef,
  OnDestroy,
  Type
} from '@angular/core';
import { PositionService } from '../position/positioning.service';
import { TooltipPopup } from './tooltip-popup';

export abstract class Tooltip<T extends TooltipPopup> implements OnInit, OnDestroy {
  @Input() context: any;
  @Input() trigger: 'hover'|'click' | 'manual' = 'hover';
  @Input() placement: 'top' | 'bottom' | 'left' | 'right' = 'top';
  popupRef: ComponentRef<T>;
  triggers = {
    hover: ['mouseenter', 'mouseleave'],
    focus: ['focusin', 'focusout'],
    click: ['click'],
    manual: []
  };
  listens: Function[] = [];
  tooltipPopupType: Type<T>;

  constructor(protected viewContainerRef: ViewContainerRef,
              protected elementRef: ElementRef,
              protected componentFactoryResolver: ComponentFactoryResolver,
              protected injector: Injector,
              protected positionService: PositionService,
              protected renderer: Renderer) {
  }

  abstract getContent(): string | TemplateRef<any>;

  ngOnInit() {
    const factory = this.componentFactoryResolver.resolveComponentFactory<T>(this.tooltipPopupType);
    this.popupRef = this.viewContainerRef.createComponent(factory, 0, this.injector);
    this.fillPopup();
    this.registerTriggers();
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick($event: Event) {
    if (this.trigger !== 'manual') {
      const hostElement = this.elementRef.nativeElement;
      if ($event.target !== hostElement) {
        this.hide();
      }
    }
  }

  ngOnDestroy(): void {
    this.listens.forEach(unregister => unregister());
  }

  show() {
    this.fillPopup();
    this.popupRef.instance.show();
    this.positionTooltip();
  }

  hide() {
    if (this.popupRef) {
      const popupComponent = this.popupRef.instance;
      popupComponent.hide();
    }
  }

  private registerTriggers() {
    const hostElement = this.elementRef.nativeElement;
    const trigger = this.triggers[this.trigger];
    if (trigger[0]) {
      this.listens.push(this.renderer.listen(hostElement, trigger[0], () => this.show()));
    }
    if (trigger[1]) {
      this.listens.push(this.renderer.listen(hostElement, trigger[1], () => this.hide()));
    }
  }

  private positionTooltip() {
    const hostElement = this.elementRef.nativeElement;
    const targetElement = this.popupRef.location.nativeElement;
    const clientRect = this.positionService.positionElements(hostElement, targetElement, this.placement, false);
    this.renderer.setElementStyle(targetElement, 'left', `${clientRect.left}px`);
    this.renderer.setElementStyle(targetElement, 'top', `${clientRect.top}px`);
  }

  protected fillPopup(): T {
    const popupComponent = this.popupRef.instance;
    popupComponent.content = this.getContent();
    popupComponent.context = this.context || {};
    popupComponent.placement = this.placement;
    return popupComponent;
  }
}
