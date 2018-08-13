import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { RebirthNGConfig } from '../rebirth-ng.config';

@Component({
  selector: 're-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss'],
  exportAs: 'tags',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TagsComponent),
    multi: true
  }]
})
export class TagsComponent implements ControlValueAccessor {
  @Input() cssClass: string;
  @Input() newTagText: string;
  @Input() plusIcon: string;
  @Input() removeIcon: string;
  @Input() maxlength: number;
  @Input() maxSize: number;
  @Input() type: '' | 'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger';
  mutipleItems: string[] = [];
  disabled: boolean;
  selectValue: string;
  isTyping: boolean;
  private onChange = (_: any) => null;
  private onTouched = () => null;

  constructor(private rebirthNGConfig: RebirthNGConfig) {
    this.type = this.rebirthNGConfig.tags.type as any;
    this.newTagText = this.rebirthNGConfig.tags.newTagText;
    this.plusIcon = this.rebirthNGConfig.tags.plusIcon;
    this.removeIcon = this.rebirthNGConfig.tags.removeIcon;
    this.maxlength = this.rebirthNGConfig.tags.maxlength;
    this.maxSize = this.rebirthNGConfig.tags.maxSize;
  }

  writeValue(obj: any): void {
    this.mutipleItems = typeof obj === 'string' ? [obj] : (obj || []);
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

  newTag() {
    if (this.canAddMore()) {
      this.isTyping = true;
    }
  }

  removeLabel(label) {
    this.mutipleItems = this.mutipleItems.filter(item => label !== item);
    this.onTouched();
    this.onChange(this.mutipleItems);
  }

  addLabel(label) {
    this.onTouched();
    if (label && this.mutipleItems.indexOf(label) === -1 && this.canAddMore()) {
      this.mutipleItems.push(label);
      this.onChange(this.mutipleItems);
    }
    this.selectValue = '';
    this.isTyping = false;
  }

  canAddMore() {
    return !this.maxSize || this.mutipleItems.length < this.maxSize;
  }

  boxBlur() {
    this.isTyping = false;
  }

}
