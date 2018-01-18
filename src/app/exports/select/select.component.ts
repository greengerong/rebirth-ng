import find from 'lodash/find';
import {
  Component,
  Input,
  Output,
  forwardRef,
  EventEmitter,
  HostListener,
  ElementRef,
  TemplateRef,
  OnInit,
  SimpleChanges,
  SimpleChange,
  ChangeDetectorRef,
  ChangeDetectionStrategy
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { RebirthNGConfig } from '../rebirth-ng.config';
import {
  trigger,
  state,
  transition,
  animate,
  style
} from '@angular/animations';
import { GroupOption } from './select.model';

@Component({
  selector: 're-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: 'select',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true
    }
  ],
  animations: [
    trigger('arrowState', [
      state(
        'down',
        style({
          transform: 'rotate(0deg)'
        })
      ),
      state(
        'up',
        style({
          transform: 'rotate(180deg)'
        })
      ),
      transition('down => up', animate('200ms ease-in')),
      transition('up => down', animate('200ms ease-out'))
    ])
  ]
})
export class SelectComponent implements OnInit, ControlValueAccessor {
  @Input() disabled: boolean;
  @Input() placeholder: string;
  @Input() iconDown: string;
  @Input() direction: 'down' | 'up' = 'down';
  @Input() itemTemplate: TemplateRef<any>;
  @Input() formatter: (obj: any) => string;
  @Output() onSelect = new EventEmitter<any>();

  arrowState = 'down';
  activeIndex = 0;
  selectedItem: any;
  selectedText: string;
  isPopup = false;

  private _groupOptions: GroupOption[];
  private _options: any[];
  private onChange = (_: any) => null;
  private onTouched = () => null;

  constructor(private changeDetectorRef: ChangeDetectorRef, private elementRef: ElementRef,
              rebirthNgConfig: RebirthNGConfig) {
    this.iconDown = rebirthNgConfig.select.iconDown;
    this.formatter = rebirthNgConfig.select.formatter;
  }

  @Input()
  set groupOptions(group: GroupOption[]) {
    if (group && this._groupOptions !== group) {
      this._options = group.reduce((opts, item) => {
        if (item.options && item.options.length) {
          opts.push({ group: item }, ...item.options);
        }

        if (this.selectedItem) {
          setTimeout(() => this.changeValue(null));
        }
        return opts;
      }, []);
    }
    this._groupOptions = group;
  }

  @Input()
  set options(options: any[]) {
    this._options = options;
    if (this.selectedItem) {
      if (!find(options, this.selectedItem)) {
        setTimeout(() => this.changeValue(null));
      }
    }
  }

  get options(): any[] { return this._options; }

  ngOnInit(): void {
    this.arrowState = this.direction;
  }

  writeValue(value: any): void {
    this.changeValue(value);
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

  onPopupToggle(isPopup?: boolean) {
    if (!this.disabled) {
      if (isPopup === undefined) {
        isPopup = !this.isPopup;
      }
      this.isPopup = isPopup;

      let status = { false: 'down', true: 'up' };
      if (this.direction === 'up') {
        status = { false: 'up', true: 'down' };
      }
      this.arrowState = status[isPopup.toString()];
      this.updateActiveIndex();
    }
  }

  onSelectedChange(value: any) {
    this.onTouched();
    this.changeValue(value);
    this.onPopupToggle(false);
    this.onSelect.emit(value);
  }

  onActiveIndexChange(index) {
    this.activeIndex = (index + this._options.length) % this._options.length;
    return this.activeIndex;
  }

  @HostListener('keydown.esc', ['$event'])
  onEscKeyup($event) {
    this.onPopupToggle(false);
  }

  @HostListener('keydown.Enter', ['$event'])
  onEnterKeyDown($event) {
    if (this.isPopup) {
      $event.preventDefault();
      $event.stopPropagation();
      this.onSelectedChange(this._options[this.activeIndex]);
    }
  }

  @HostListener('keydown.ArrowUp', ['$event'])
  onArrowUpKeyDown($event) {
    if (this.isPopup) {
      $event.preventDefault();
      $event.stopPropagation();
      const index = this.onActiveIndexChange(this.activeIndex - 1);
      if (this.isGroupItem(this._options[index])) {
        this.onActiveIndexChange(this.activeIndex - 1);
      }
    }
  }

  @HostListener('keydown.ArrowDown', ['$event'])
  onArrowDownKeyDown($event) {
    if (this.isPopup) {
      $event.preventDefault();
      $event.stopPropagation();
      const index = this.onActiveIndexChange(this.activeIndex + 1);
      if (this.isGroupItem(this._options[index])) {
        this.onActiveIndexChange(this.activeIndex + 1);
      }
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick($event: Event) {
    const hostElement = this.elementRef.nativeElement;
    if (!hostElement.contains($event.target)) {
      this.onPopupToggle(false);
    }
  }

  isGroupItem(item: any): boolean {
    return item.group;
  }

  private changeValue(value: any) {
    this.selectedItem = value;
    this.selectedText = value ? this.formatter(value) : '';
    this.updateActiveIndex();
    this.onChange(value);
    this.changeDetectorRef.markForCheck();
  }

  private updateActiveIndex() {
    if (this._options && this.selectedItem) {
      this.activeIndex = this._options.indexOf(this.selectedItem);
    }
  }
}
