import {
  ChangeDetectorRef,
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  ElementRef,
  EventEmitter,
  forwardRef,
  HostListener,
  Injector,
  Input,
  OnDestroy,
  OnInit,
  Output,
  Renderer2,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import { RebirthNGConfig } from '../rebirth-ng.config';
import { PositionService } from '../position/positioning.service';
import { AutoCompletePopupComponent } from './auto-complete-popup.component';
import { stopPropagationIfExist } from '../utils/dom-utils';

@Directive({
  selector: '[reAutoComplete]',
  exportAs: 'autoComplete',
  host: {
    'autocomplete': 'off',
    'autocapitalize': 'off',
    'autocorrect': 'off'
  },
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => AutoCompleteDirective),
    multi: true
  }]
})
export class AutoCompleteDirective implements OnInit, OnDestroy, ControlValueAccessor {
  @Input() disabled: boolean;
  @Input() cssClass: string;
  @Input() delay: number;
  @Input() minLength: number;
  @Input() appendBody = false;
  @Input() itemTemplate: TemplateRef<any>;
  @Input() noResultItemTemplate: TemplateRef<any>;
  @Input() formatter: (item: any) => string;
  @Input() valueParser: (item: any) => any;
  @Input() onSearch: (term: string, target?: AutoCompleteDirective) => Observable<any[]>;
  @Output() selectValueChange = new EventEmitter<any>();
  @Input() placementElement: any;
  private valueChanges: Observable<any[]>;
  private value: any;
  private placement = 'bottom-left';
  private subscription: Subscription;
  private arraySource: any[];
  private popupRef: ComponentRef<AutoCompletePopupComponent>;
  private onChange = (_: any) => null;
  private onTouched = () => null;

  constructor(private elementRef: ElementRef, private viewContainerRef: ViewContainerRef,
              private componentFactoryResolver: ComponentFactoryResolver, private renderer: Renderer2,
              private injector: Injector, private positionService: PositionService,
              private rebirthUIConfig: RebirthNGConfig, private changeDetectorRef: ChangeDetectorRef) {
    this.valueChanges = this.registerInputEvent(elementRef);
    this.delay = rebirthUIConfig.autoComplete.delay;
    this.minLength = rebirthUIConfig.autoComplete.minLength;
    this.itemTemplate = rebirthUIConfig.autoComplete.itemTemplate;
    this.noResultItemTemplate = rebirthUIConfig.autoComplete.noResultItemTemplate;
    this.formatter = rebirthUIConfig.autoComplete.formatter;
    this.valueParser = rebirthUIConfig.autoComplete.valueParser;
  }

  ngOnInit() {
    this.subscription = this.valueChanges
      .subscribe(source => this.onSourceChange(source));

    const factory = this.componentFactoryResolver.resolveComponentFactory(AutoCompletePopupComponent);

    const viewContainerRef = this.appendBody ? this.rebirthUIConfig.rootContainer : this.viewContainerRef;
    // EXCEPTION: Expression has changed after it was checked when append to body;

    setTimeout(() => {
      this.popupRef = viewContainerRef.createComponent(factory, this.viewContainerRef.length, this.injector);
      this.fillPopup();
      this.positionPopup();

      this.popupRef.instance.registerOnChange(item => {
        const value = this.valueParser(item);
        this.writeValue(value);
        this.onChange(value);
        this.hidePopup();
        this.selectValueChange.emit(item);
      });
    }, 0);
  }

  @Input() set dataSource(dataSource: any[]) {
    if (dataSource) {
      this.arraySource = dataSource;
      this.setupArraySource();
    }
  }

  private setupArraySource() {
    this.onSearch = (term) => {
      return of(
        this.arraySource
          .filter(item => this.formatter(item).toLowerCase().indexOf(term.toLowerCase()) !== -1)
      );
    };
  }

  writeValue(obj: any): void {
    this.value = obj;
    this.writeInputValue(this.value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
    this.renderer.setProperty(this.elementRef.nativeElement, 'disabled', isDisabled);
    if (this.popupRef) {
      this.popupRef.instance.setDisabledState(isDisabled);
    }
  }

  ngOnDestroy() {
    this.unSubscription();
    this.removePopView();
  }

  private removePopView() {
    if (this.popupRef) {
      this.popupRef.destroy();
    }
  }

  @HostListener('blur', [])
  onBlur() {
    this.onTouched();
  }

  @HostListener('keydown.esc', ['$event'])
  onEscKeyup($event) {
    this.hidePopup();
  }

  @HostListener('keydown.Enter', ['$event'])
  onEnterKeyDown($event) {
    if (this.popupRef && this.popupRef.instance.isOpen) {
      $event.preventDefault();
      $event.stopPropagation();
      this.popupRef.instance.selectCurrentItem();
      this.hidePopup();
    }
  }

  @HostListener('keydown.ArrowUp', ['$event'])
  onArrowUpKeyDown($event) {
    if (this.popupRef) {
      $event.preventDefault();
      $event.stopPropagation();
      this.popupRef.instance.prev();
    }
  }

  @HostListener('keydown.ArrowDown', ['$event'])
  onArrowDownKeyDown($event) {
    if (this.popupRef) {
      $event.preventDefault();
      $event.stopPropagation();
      this.popupRef.instance.next();
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick($event: Event) {
    const hostElement = this.elementRef.nativeElement;
    if ($event.target !== hostElement) {
      this.hidePopup();
    }
  }

  onSourceChange(source) {
    const pop = this.popupRef.instance;
    pop.reset();
    this.fillPopup(source, this.value);
    if ((source && source.length) || this.noResultItemTemplate) {
      pop.show();
      this.positionPopup();
      this.changeDetectorRef.markForCheck();
    }
  }

  private hidePopup() {
    if (this.popupRef) {
      this.popupRef.instance.activeIndex = 0;
      this.popupRef.instance.hide();
    }
  }

  toggle($event?: Event) {
    stopPropagationIfExist($event);

    if (this.popupRef) {
      const pop = this.popupRef.instance;
      if (pop.isOpen) {
        this.hidePopup();
        return;
      }
      this.onSourceChange(this.arraySource);
    }
  }

  positionPopup() {
    const targetElement = this.popupRef.location.nativeElement;
    const hostElement = this.placementElement || this.elementRef.nativeElement;
    const clientRect = this.positionService.positionElements(hostElement, targetElement, this.placement, this.appendBody);
    this.renderer.setStyle(targetElement, 'left', `${clientRect.left}px`);
    this.renderer.setStyle(targetElement, 'top', `${clientRect.top}px`);
  }

  private fillPopup(source?: any, term?: string) {
    const pop = this.popupRef.instance;
    pop.source = source;
    pop.term = term;
    ['formatter', 'itemTemplate', 'noResultItemTemplate', 'cssClass']
      .forEach(key => {
        if (this[key] !== undefined) {
          pop[key] = this[key];
        }
      });
  }

  private writeInputValue(value: any) {
    this.renderer.setProperty(this.elementRef.nativeElement, 'value', this.formatter(value || ''));
  }

  private unSubscription() {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = null;
    }
  }

  private onTermChange(term) {
    this.value = term;
    if (this.popupRef) {
      this.popupRef.instance.term = term;
    }
    this.onChange(term);
  }

  private registerInputEvent(elementRef: ElementRef) {
    return fromEvent(elementRef.nativeElement, 'input')
      .map((e: any) => e.target.value)
      .do(term => this.onTouched())
      .filter(term => !this.disabled && this.onSearch && term.length >= this.minLength)
      .debounceTime(this.delay)
      // .distinctUntilChanged()
      .do(term => this.onTermChange(term))
      .switchMap(term => this.onSearch(term, this));
  }
}
