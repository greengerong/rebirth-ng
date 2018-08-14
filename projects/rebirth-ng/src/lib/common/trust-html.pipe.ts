import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'trustHtml'
})

export class TrustHtmlPipe implements PipeTransform {

  constructor(private domSanitizer: DomSanitizer) {

  }

  transform(value: any, args: any[]): any {
    return value ? this.domSanitizer.bypassSecurityTrustHtml(value) : '';
  }
}
