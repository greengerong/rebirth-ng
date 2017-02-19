import { OnInit, forwardRef, Input, Directive } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: '[reAutoComplete]',
  exportAs: 'autoComplete',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => AutoCompleteDirective),
    multi: true
  }]
})
export class AutoCompleteDirective implements OnInit {
  @Input() disabled: boolean;
  @Input() value: any;
  private onChange = (_: any) => null;
  private onTouched = () => null;

  constructor() {
  }

  ngOnInit() {
  }

  writeValue(obj: any): void {
    this.value = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
    // this.renderer.setElementProperty(this.elementRef.nativeElement, 'disabled', isDisabled);
    // if (this.isOpen) {
    //   this.cmpRef.instance.setDisabledState(isDisabled);
    // }
  }
}
