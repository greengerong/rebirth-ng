import { Component, Input, TemplateRef, forwardRef, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { AutoCompleteDirective } from './auto-complete.directive';
import { Observable } from 'rxjs/Observable';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { RebirthNGConfig } from '../rebirth-ng.config';

@Component({
  selector: 're-mutiple-auto-complete',
  templateUrl: './mutiple-auto-complete.component.html',
  styleUrls: ['./mutiple-auto-complete.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => MutipleAutoCompleteComponent),
    multi: true
  }]
})
export class MutipleAutoCompleteComponent implements AfterViewInit, ControlValueAccessor {
  static ID_SEED = 0;

  id: number;
  @Input() disabled: boolean;
  @Input() cssClass: string;
  @Input() popupCssClass: string;
  @Input() delay: number;
  @Input() minLength: number;
  @Input() appendBody = false;
  @Input() dataSource: any[];
  @Input() itemTemplate: TemplateRef<any>;
  @Input() noResultItemTemplate: TemplateRef<any>;
  @Input() formatter: (item: any) => string;
  @Input() valueParser: (item: any) => any;
  @Input() onSearch: (term: string, target?: AutoCompleteDirective) => Observable<any[]>;

  selectValue: any;
  mutipleItems: any[];
  @ViewChild(AutoCompleteDirective) autoCompleteDirective: AutoCompleteDirective;
  private onChange = (_: any) => null;

  constructor(private rebirthNGConfig: RebirthNGConfig, private changeDetectorRef: ChangeDetectorRef) {
    this.delay = rebirthNGConfig.autoComplete.delay;
    this.minLength = rebirthNGConfig.autoComplete.minLength;
    this.itemTemplate = rebirthNGConfig.autoComplete.itemTemplate;
    this.noResultItemTemplate = rebirthNGConfig.autoComplete.noResultItemTemplate;
    this.formatter = rebirthNGConfig.autoComplete.formatter;
    this.valueParser = rebirthNGConfig.autoComplete.valueParser;
    this.id = MutipleAutoCompleteComponent.ID_SEED++;
  }

  private onTouched = () => null;

  writeValue(obj: any): void {
    this.mutipleItems = obj || [];
    this.changeDetectorRef.markForCheck();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  ngAfterViewInit(): void {
    if (this.autoCompleteDirective) {
      this.autoCompleteDirective.registerOnTouched(() => this.onTouched());
    }
  }

  toggle($event?: Event) {
    if (this.autoCompleteDirective) {
      this.autoCompleteDirective.toggle($event);
    }
  }

  onMutipleSearch() {
    this.onTouched();
    if (this.mutipleItems.indexOf(this.selectValue) === -1) {
      this.mutipleItems.push(this.selectValue);
      this.onChange(this.mutipleItems);
    }

    this.selectValue = null;
  }

  removeLabel(label) {
    if (this.disabled) {
      return;
    }
    this.onTouched();
    if (this.mutipleItems.indexOf(label) !== -1) {
      this.mutipleItems = this.mutipleItems.filter(item => item !== label);
      this.onChange(this.mutipleItems);
    }
  }

  onMutipleSearchBoxBackspace($event: Event) {
    this.onTouched();
    if (!(<any>$event.target).value && this.mutipleItems.length) {
      this.mutipleItems.pop();
      this.onChange(this.mutipleItems);
      setTimeout(() => this.autoCompleteDirective.positionPopup(), 0);
    }
  }

}
