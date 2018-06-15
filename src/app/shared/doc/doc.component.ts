import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 're-doc',
  templateUrl: './doc.component.html',
  styleUrls: ['./doc.component.scss']
})
export class DocComponent implements OnInit {


  apiHref: string | SafeUrl;
  @Input() component: any;

  constructor(private domSanitizer: DomSanitizer) {

  }

  ngOnInit(): void {
    const url = `/rebirth-ng/compodocs/modules/${this.component.name}Module.html`;
    this.apiHref = this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
