import {
  OnInit,
  Input,
  ViewContainerRef,
  ComponentFactoryResolver,
  Injector,
  ComponentRef,
  ElementRef,
  Renderer2,
  HostListener,
  TemplateRef,
  OnDestroy,
  Type,
  EventEmitter
} from '@angular/core';
import { PositionService } from '../position/positioning.service';
import { TooltipPopup } from './tooltip-popup';

export abstract class Tooltip<T extends TooltipPopup> implements OnInit, OnDestroy {
  @Input() context: any;
  @Input() cssClass: string;
  @Input() trigger: 'hover' | 'click' | 'manual' = 'hover';
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
  positionChange = new EventEmitter<any>();

  constructor(protected viewContainerRef: ViewContainerRef,
              protected elementRef: ElementRef,
              protected componentFactoryResolver: ComponentFactoryResolver,
              protected injector: Injector,
              protected positionService: PositionService,
              protected renderer: Renderer2) {
  }

  abstract getContent(): string | TemplateRef<any>;

  ngOnInit() {
    const factory = this.componentFactoryResolver.resolveComponentFactory<T>(this.tooltipPopupType);
    this.popupRef = this.viewContainerRef.createComponent(factory, 0, this.injector);
    this.fillPopup();
    this.registerTriggers();
    this.positionChange
      .filter(() => this.popupRef && this.popupRef.instance.isOpen)
      .debounceTime(100)
      .distinctUntilChanged()
      .subscribe(() => this.positionTooltip());
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick($event: Event) {
    if (this.trigger !== 'manual') {
      const hostElement = this.elementRef.nativeElement;
      if (!hostElement.contains($event.target)) {
        this.hide();
      }
    }
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize($event: Event) {
    this.positionChange.emit($event);
  }

  // @HostListener('document:scroll', ['$event'])
  // onDocumentScroll($event: Event) {
  //   this.positionChange.emit($event);
  // }

  ngOnDestroy(): void {
    this.listens.forEach(unregister => unregister());
    this.removePopView();
  }

  private removePopView() {
    if (this.popupRef) {
      this.popupRef.destroy();
    }
  }

  toggle() {
    if (this.popupRef.instance.isOpen) {
      return this.hide();
    }

    this.show();
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
      this.listens.push(this.renderer.listen(hostElement, trigger[0], (event) => {
        this.show();
      }));
    }
    if (trigger[1]) {
      this.listens.push(this.renderer.listen(hostElement, trigger[1], ($event) => {
        this.hide();
      }));
    }
  }

  private positionTooltip() {
    const hostElement = this.elementRef.nativeElement;
    const targetElement = this.popupRef.location.nativeElement;
    const clientRect = this.positionService.positionElements(hostElement, targetElement, this.placement, false);
    this.renderer.setStyle(targetElement, 'left', `${clientRect.left}px`);
    this.renderer.setStyle(targetElement, 'top', `${clientRect.top}px`);
  }

  protected fillPopup(): T {
    const popupComponent = this.popupRef.instance;
    popupComponent.content = this.getContent();
    popupComponent.cssClass = this.cssClass;
    popupComponent.context = this.context || {};
    popupComponent.placement = this.placement;
    return popupComponent;
  }
}
