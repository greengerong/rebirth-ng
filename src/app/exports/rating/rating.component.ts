import {
  Component, Input, EventEmitter, ChangeDetectionStrategy, forwardRef,
  ChangeDetectorRef
} from '@angular/core';
import { RebirthNGConfig } from '../rebirth-ng.config';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 're-rating',
  templateUrl: './rating.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: 'rating',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => RatingComponent),
    multi: true
  }]
})
export class RatingComponent implements ControlValueAccessor {
  ratingRanges: number[];
  value = 0;
  @Input() disabled = false;
  @Input() cssClass: string;
  @Input() icons: { stateOn, stateOff };
  valueChange = new EventEmitter<number>();
  statValue = 0;
  private onChange = (_: any) => null;
  private onTouched = () => null;

  constructor(private rebirthUIConfig: RebirthNGConfig, private changeDetectorRef: ChangeDetectorRef) {
    this.icons = rebirthUIConfig.rating.icons;
    this.ratingRanges = this.fillRatingRange(rebirthUIConfig.rating.max);
  }

  @Input()
  set max(value: number) {
    this.ratingRanges = this.fillRatingRange(value);
  }

  setRatingValue(value: number) {
    this.statValue = this.value = value;
  }


  writeValue(obj: any): void {
    this.setRatingValue(obj);
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

  rate(value: number) {
    if (!this.disabled && this.value !== value) {
      this.onTouched();
      this.setRatingValue(value);
      this.valueChange.emit(this.value);
      this.onChange(this.value);
    }
  }

  enter(value: number) {
    if (!this.disabled) {
      this.onTouched();
      this.statValue = value;
    }
  }

  reset() {
    this.statValue = this.value;
  }

  private fillRatingRange(range: number) {
    return Array<number>(range).fill(0).map((_, i) => i + 1);
  }
}
