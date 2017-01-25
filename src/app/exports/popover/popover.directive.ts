import {
  Directive, OnInit, Input, TemplateRef, ComponentRef, ViewContainerRef, ElementRef,
  ComponentFactoryResolver, Injector, Renderer, HostListener, OnDestroy, DoCheck
} from '@angular/core';
import { PopoverPopupComponent } from './popover-popup.component';
import { PositionService } from '../position/positioning.service';

@Directive({
  selector: '[rePopover]',
  exportAs: 'popover'
})
export class PopoverDirective implements OnInit, OnDestroy {
  @Input() title: string | TemplateRef<any>;
  @Input('rePopover') content: string | TemplateRef<any>;
  @Input() context: any;
  @Input() trigger: 'hover'|'click' | 'manual' = 'click';
  @Input() placement: 'top' | 'bottom' | 'left' | 'right' = 'top';
  popupRef: ComponentRef<PopoverPopupComponent>;
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
    const factory = this.componentFactoryResolver.resolveComponentFactory(PopoverPopupComponent);
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

  private fillPopup() {
    const popupComponent = this.popupRef.instance;
    popupComponent.content = this.content;
    popupComponent.title = this.title;
    popupComponent.context = this.context || {};
    popupComponent.placement = this.placement;
    // this.popupRef.changeDetectorRef.markForCheck();
  }

}
