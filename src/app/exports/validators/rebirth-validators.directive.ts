import { Directive, Inject, Input, LOCALE_ID } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';
import {
  includesValidator,
  equalToValidator,
  rangeLengthValidator,
  minValidator,
  maxValidator,
  rangeValidator,
  digitsValidator,
  numberValidator,
  urlValidator,
  emailValidator,
  dateValidator,
  dateISOValidator,
  jsonValidator,
  base64Validator,
  phoneValidator,
  uuidValidator,
  equalValidator,
  beforeDateValidator,
  afterDateValidator
} from './rebirth-validators';

@Directive({
  selector: '[reRangeLength]',
  providers: [{ provide: NG_VALIDATORS, useExisting: RangeLengthDirective, multi: true }]
})
export class RangeLengthDirective implements Validator {

  @Input() reRangeLength: number[];

  constructor() {
  }

  validate(control: AbstractControl): ValidationErrors | any {
    return rangeLengthValidator(this.reRangeLength)(control);
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

  validate(control: AbstractControl): ValidationErrors | any {
    return minValidator(this.reMin)(control);
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

  validate(control: AbstractControl): ValidationErrors | any {
    return maxValidator(this.reMax)(control);
  }
}

@Directive({
  selector: '[reRange]',
  providers: [{ provide: NG_VALIDATORS, useExisting: RangeDirective, multi: true }]
})
export class RangeDirective implements Validator {

  @Input() reRange: number[];

  constructor() {
  }

  validate(control: AbstractControl): ValidationErrors | any {
    return rangeValidator(this.reRange)(control);
  }
}

@Directive({
  selector: '[reDigits]',
  providers: [{ provide: NG_VALIDATORS, useExisting: DigitsDirective, multi: true }]
})
export class DigitsDirective implements Validator {

  validate(control: AbstractControl): ValidationErrors | any {
    return digitsValidator()(control);
  }
}

@Directive({
  selector: '[reNumber]',
  providers: [{ provide: NG_VALIDATORS, useExisting: NumberDirective, multi: true }]
})
export class NumberDirective implements Validator {

  validate(control: AbstractControl): ValidationErrors | any {
    return numberValidator()(control);
  }
}

@Directive({
  selector: '[reUrl]',
  providers: [{ provide: NG_VALIDATORS, useExisting: UrlDirective, multi: true }]
})
export class UrlDirective implements Validator {

  validate(control: AbstractControl): ValidationErrors | any {
    return urlValidator()(control);
  }
}

@Directive({
  selector: '[reEmail]',
  providers: [{ provide: NG_VALIDATORS, useExisting: EmailDirective, multi: true }]
})
export class EmailDirective implements Validator {

  validate(control: AbstractControl): ValidationErrors | any {
    return emailValidator()(control);
  }
}

@Directive({
  selector: '[reDate]',
  providers: [{ provide: NG_VALIDATORS, useExisting: DateDirective, multi: true }]
})
export class DateDirective implements Validator {

  validate(control: AbstractControl): ValidationErrors | any {
    return dateValidator()(control);
  }
}

@Directive({
  selector: '[reDateISO]',
  providers: [{ provide: NG_VALIDATORS, useExisting: DateISODirective, multi: true }]
})
export class DateISODirective implements Validator {

  validate(control: AbstractControl): ValidationErrors | any {
    return dateISOValidator()(control);
  }
}

@Directive({
  selector: '[reJson]',
  providers: [{ provide: NG_VALIDATORS, useExisting: JsonDirective, multi: true }]
})
export class JsonDirective implements Validator {

  validate(control: AbstractControl): ValidationErrors | any {
    return jsonValidator()(control);
  }
}

@Directive({
  selector: '[reBase64]',
  providers: [{ provide: NG_VALIDATORS, useExisting: Base64Directive, multi: true }]
})
export class Base64Directive implements Validator {

  validate(control: AbstractControl): ValidationErrors | any {
    return base64Validator()(control);
  }
}

@Directive({
  selector: '[rePhone]',
  providers: [{ provide: NG_VALIDATORS, useExisting: PhoneDirective, multi: true }]
})
export class PhoneDirective implements Validator {

  @Input() rePhone: string;

  constructor(@Inject(LOCALE_ID) private locale: string) {
  }

  validate(control: AbstractControl): ValidationErrors | any {
    return phoneValidator(this.rePhone || this.locale)(control);
  }
}

@Directive({
  selector: '[reUUID]',
  providers: [{ provide: NG_VALIDATORS, useExisting: UUIDDirective, multi: true }]
})
export class UUIDDirective implements Validator {

  validate(control: AbstractControl): ValidationErrors | any {
    return uuidValidator()(control);
  }
}

@Directive({
  selector: '[reEqual]',
  providers: [{ provide: NG_VALIDATORS, useExisting: EqualDirective, multi: true }]
})
export class EqualDirective implements Validator {

  @Input() reEqual: any;

  validate(control: AbstractControl): ValidationErrors | any {
    return equalValidator(this.reEqual)(control);
  }
}

@Directive({
  selector: '[reIncludes]',
  providers: [{ provide: NG_VALIDATORS, useExisting: IncludesDirective, multi: true }]
})
export class IncludesDirective implements Validator {

  @Input() reIncludes: any[];

  validate(control: AbstractControl): ValidationErrors | any {
    return includesValidator(this.reIncludes)(control);
  }
}

@Directive({
  selector: '[reEqualTo]',
  providers: [{ provide: NG_VALIDATORS, useExisting: EqualToDirective, multi: true }]
})
export class EqualToDirective implements Validator {
  private validatorFn: ValidatorFn;

  @Input() set reEqualTo(target: AbstractControl | string) {
    this.validatorFn = equalToValidator(target);
  };

  validate(control: AbstractControl): ValidationErrors | any {
    return this.validatorFn(control);
  }
}

@Directive({
  selector: '[reBeforeDate]',
  providers: [{ provide: NG_VALIDATORS, useExisting: BeforeDateDirective, multi: true }]
})
export class BeforeDateDirective implements Validator {
  private validatorFn: ValidatorFn;

  @Input() set reBeforeDate(target: string | Date | number) {
    this.validatorFn = beforeDateValidator(target);
  };

  validate(control: AbstractControl): ValidationErrors | any {
    return this.validatorFn(control);
  }
}

@Directive({
  selector: '[reAfterDate]',
  providers: [{ provide: NG_VALIDATORS, useExisting: AfterDateDirective, multi: true }]
})
export class AfterDateDirective implements Validator {
  private validatorFn: ValidatorFn;

  @Input() set reBeforeDate(target: string | Date | number) {
    this.validatorFn = afterDateValidator(target);
  };

  validate(control: AbstractControl): ValidationErrors | any {
    return this.validatorFn(control);
  }
}
