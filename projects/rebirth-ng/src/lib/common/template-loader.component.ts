import { Component, OnInit, OnDestroy, TemplateRef, Input, EmbeddedViewRef, ViewContainerRef } from '@angular/core';

@Component({
  selector: 're-template-loader',
  template: ``
})
export class TemplateLoaderComponent implements OnInit, OnDestroy {

  @Input() template: TemplateRef<any>;
  @Input() data: any;
  @Input() $implicit: any = {};

  view: EmbeddedViewRef<any>;

  constructor(public viewContainer: ViewContainerRef) {

  }

  ngOnInit() {
    if (this.template) {
      const context = Object.assign({}, { '$implicit': this.data }, this.data);
      this.view = this.viewContainer.createEmbeddedView(this.template, context);
    }
  }

  ngOnDestroy() {
    if (this.view) {
      this.view.destroy();
    }
  }
}
