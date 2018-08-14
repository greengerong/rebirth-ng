import { Component, EventEmitter, ComponentFactoryResolver, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Modal, ModalService } from 'rebirth-ng';

@Component({
  selector: 're-modal-test',
  template: `
  <div class="modal-header">
    <button type="button" class="close" data-dismiss="modal" aria-label="Close" (click)="cancel()">
    <span aria-hidden="true">&times;</span></button>
    <h4 class="modal-title">I'm a rebirth modal!</h4>
  </div>
  <div class="modal-body">
     <form class="form-horizontal">
      <div class="form-group">
        <label for="textInput" class="col-sm-2 control-label">Text:</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="textInput" name="text" [(ngModel)]="context.text" />
        </div>
      </div>
    </form>
    <hr>
    <strong>Modal context:</strong> <pre>{{context | json}}</pre>
    <hr>
    <button class="btn btn-default" (click)="show()">Open inner modal!</button>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-primary" (click)="ok()">Ok</button>
    <button type="button" class="btn btn-warning" (click)="cancel()">Cancel</button>
  </div>`
})
export class ModalTestComponent implements Modal, OnInit {

  context: { text: string };
  dismiss: EventEmitter<string>;

  constructor(private modalService: ModalService, private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit(): void {
    console.log('ModalTestComponent init....');
  }

  show() {
    this.modalService.open<string>({
      component: ModalTestComponent,
      componentFactoryResolver: this.componentFactoryResolver,
      resolve: {
        text: 'inner modal'
      },
      size: 'sm'
    })
      .subscribe(data => {
        console.log('Rebirth Modal -> Get ok with result:', data);
      }, error => {
        console.error('Rebirth Modal -> Get cancel with result:', error);
      });
  }

  ok() {
    this.dismiss.emit(this.context.text);
  }

  cancel() {
    this.dismiss.error(this.context.text);
  }
}


@Component({
  selector: 're-modal-demo',
  templateUrl: 'modal-demo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalDemoComponent {

  constructor(private modalService: ModalService, private componentFactoryResolver: ComponentFactoryResolver) {
  }

  openModal() {
    this.modalService.open<string>({
      component: ModalTestComponent,
      componentFactoryResolver: this.componentFactoryResolver,
      resolve: {
        text: 'I am from resolve data!'
      }
    })
      .subscribe(data => {
        console.log('Rebirth Modal -> Get ok with result:', data);
      }, error => {
        console.error('Rebirth Modal -> Get cancel with result:', error);
      });
  }
}
