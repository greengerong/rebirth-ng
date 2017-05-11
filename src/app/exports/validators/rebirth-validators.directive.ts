import { Directive, Input } from '@angular/core';
import { Validator, AbstractControl, ValidationErrors, NG_VALIDATORS } from '@angular/forms';
import { RebirthValidators } from './rebirth-validators';

@Directive({
  selector: '[reRangeLength]',
  providers: [{ provide: NG_VALIDATORS, useExisting: RangeLengthDirective, multi: true }]
})
export class RangeLengthDirective implements Validator {

  @Input() reRangeLength: number[];

  constructor() {
  }

  validate(control: AbstractControl): ValidationErrors|any {
    return RebirthValidators.rangeLength(this.reRangeLength)(control);
  }
}

@Directive({
  selector: '[reMin]',
  providers: [{ provide: NG_VALIDATORS, useExisting: MinDirective, multi: true }]
})
export class MinDirective implements Validator {

  @Input() reMin: number;

  constructor() {
  }

  validate(control: AbstractControl): ValidationErrors|any {
    return RebirthValidators.min(this.reMin)(control);
  }
}

@Directive({
  selector: '[reMax]',
  providers: [{ provide: NG_VALIDATORS, useExisting: MaxDirective, multi: true }]
})
export class MaxDirective implements Validator {

  @Input() reMax: number;

  constructor() {
  }

  validate(control: AbstractControl): ValidationErrors|any {
    return RebirthValidators.max(this.reMax)(control);
  }
}
