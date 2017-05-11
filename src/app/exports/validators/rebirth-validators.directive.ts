import { Directive, Input } from '@angular/core';
import { Validator, AbstractControl, ValidationErrors, NG_VALIDATORS } from '@angular/forms';
import { RebirthValidators } from './rebirth-validators';

@Directive({
  selector: '[rangeLength]',
  providers: [{ provide: NG_VALIDATORS, useExisting: RangeLengthDirective, multi: true }]
})
export class RangeLengthDirective implements Validator {

  @Input() rangeLength: number[];

  constructor() {
  }

  validate(control: AbstractControl): ValidationErrors|any {
    return RebirthValidators.rangeLength(this.rangeLength)(control);
  }
}
