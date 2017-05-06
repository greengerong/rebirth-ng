import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 're-hightlight',
  template: ``,
  host: {
    '[innerHTML]': 'hightlightHtml',
    'display': 'inline'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HightlightComponent implements OnChanges {
  @Input() value: string;
  @Input() term: string;
  hightlightHtml: string;

  ngOnChanges(changes: SimpleChanges): void {
    this.hightlightHtml = this.transform(this.value, this.term);
  }


  transform(value: string, term: string): any {
    return value && term ? this.hightlight(value, term) : value;
  }

  hightlight(value: string, term: string) {
    const regExp = new RegExp(term.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&'), 'gi');
    return value.replace(regExp, function (match) {
      return `<b class="re-hightlight">${match}</b>`;
    });
  }
}
