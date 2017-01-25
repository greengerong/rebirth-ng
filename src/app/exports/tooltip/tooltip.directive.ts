import {
  OnInit, Directive, Input, ViewContainerRef, ComponentFactoryResolver, Injector,
  ComponentRef, ElementRef, Renderer, HostListener, TemplateRef, OnDestroy
} from '@angular/core';
import { TooltipPopupComponent } from './tooltip-popup.component';
import { PositionService } from '../position/positioning.service';

@Directive({
  selector: '[reTooltip]',
  exportAs: 'tooltip'
})
export class TooltipDirective implements OnInit, OnDestroy {
  @Input('reTooltip') content: string | TemplateRef<any>;
  @Input() context: any;
  @Input() trigger: 'hover'|'click' | 'manual' = 'hover';
  @Input() placement: 'top' | 'bottom' | 'left' | 'right' = 'top';
  popupRef: ComponentRef<TooltipPopupComponent>;
  triggers = {
    hover: ['mouseenter', 'mouseleave'],
    click: ['click'],
    manual: []
  };
  listens: Function[] = [];

  constructor(private viewContainerRef: ViewContainerRef,
              private elementRef: ElementRef,
              private componentFactoryResolver: ComponentFactoryResolver,
              private injector: Injector,
              private positionService: PositionService,
              private renderer: Renderer) {
  }

  ngOnInit() {
    const factory = this.componentFactoryResolver.resolveComponentFactory(TooltipPopupComponent);
    this.popupRef = this.viewContainerRef.createComponent(factory, 0, this.injector);
    const popupComponent = this.popupRef.instance;
    popupComponent.content = this.content;
    popupComponent.context = this.context;
    popupComponent.placement = this.placement;
    const hostElement = this.elementRef.nativeElement;
    const trigger = this.triggers[this.trigger];
    if (trigger[0]) {
      this.listens.push(this.renderer.listen(hostElement, trigger[0], () => this.show()));
    }
    if (trigger[1]) {
      this.listens.push(this.renderer.listen(hostElement, trigger[1], () => this.hide()));
    }
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
    const popupComponent = this.popupRef.instance;
    popupComponent.content = this.content;
    popupComponent.context = this.context;
    popupComponent.show();
    const hostElement = this.elementRef.nativeElement;
    const targetElement = this.popupRef.location.nativeElement;
    const clientRect = this.positionService.positionElements(hostElement, targetElement, this.placement, false);
    this.renderer.setElementStyle(targetElement, 'left', `${clientRect.left}px`);
    this.renderer.setElementStyle(targetElement, 'top', `${clientRect.top}px`);
  }

  hide() {
    if (this.popupRef) {
      const popupComponent = this.popupRef.instance;
      popupComponent.hide();
    }
  }

}
