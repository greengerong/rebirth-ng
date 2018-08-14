import { Component, EventEmitter, OnInit, TemplateRef, ViewChild, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, ValidatorFn, FormControl, AbstractControl } from '@angular/forms';
import { Modal, ModalDismissReasons } from '../modal/index';
import { DialogOptions, PromptContent } from './dialog-options.model';
import { RebirthNGConfig } from '../rebirth-ng.config';

@Component({
  selector: 're-prompt',
  templateUrl: './prompt-dialog.component.html',
  styleUrls: ['./dialog.scss']
})

export class PromptDialogComponent implements Modal, OnInit {

  context: DialogOptions;
  content: PromptContent;
  dismiss: EventEmitter<any>;
  btnYes: string;
  btnNo: string;
  btnYesType: string;
  btnNoType: string;
  form: FormGroup;
  validators: { [key: string]: { validator: ValidatorFn, message: string } };
  @ViewChild('defaultTemplate') defaultTemplate: TemplateRef<any>;

  constructor(private rebirthNGConfig: RebirthNGConfig,
              private formBuilder: FormBuilder,
              private changeDetectorRef: ChangeDetectorRef) {
    this.btnYes = rebirthNGConfig.dialog.button.yes;
    this.btnYesType = rebirthNGConfig.dialog.button.btnYesType;
    this.btnNo = rebirthNGConfig.dialog.button.no;
    this.btnNoType = rebirthNGConfig.dialog.button.btnNoType;
  }

  ngOnInit(): void {
    this.content = this.context.content as PromptContent;
    this.validators = this.content.validators || {};

    const validatorFns = Object.keys(this.validators).map((key) => this.validators[key].validator);
    this.form = this.formBuilder.group({
      promptValue: [this.content.defaultValue || '', validatorFns]
    });
    this.form.valueChanges.subscribe(() => {
      this.changeDetectorRef.markForCheck();
    });
  }

  getFieldErrors(control: AbstractControl) {
    if (control && control.errors) {
      const errors = Object.keys(control.errors).filter((key) => control.errors[key]);
      return errors.length > 0 ? [errors[0]] : [];
    }
  }

  yes() {
    this.dismiss.emit({ ...this.form.value, type: ModalDismissReasons.YES });
  }

  no() {
    this.dismiss.error(ModalDismissReasons.NO);
  }
}
