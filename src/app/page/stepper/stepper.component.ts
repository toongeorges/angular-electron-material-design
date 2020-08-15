import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS, StepperOptions } from '@angular/cdk/stepper';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: { showError: true }
  }]
})
export class StepperComponent implements OnInit {
  editable = false;
  optional = false;
  labelPositionBottom = false;
  linear = true;
  vertical = false;

  firstHFormGroup: FormGroup;
  secondHFormGroup: FormGroup;
  thirdHFormGroup: FormGroup;
  firstVFormGroup: FormGroup;
  secondVFormGroup: FormGroup;
  thirdVFormGroup: FormGroup;

  constructor(
    private _formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.firstHFormGroup = this._formBuilder.group({
      firstHCtrl: ['', Validators.required]
    });
    this.secondHFormGroup = this._formBuilder.group({
      secondHCtrl: ['', Validators.required]
    });
    this.thirdHFormGroup = this._formBuilder.group({
      thirdHCtrl: ''
    });
    this.firstVFormGroup = this._formBuilder.group({
      firstVCtrl: ['', Validators.required]
    });
    this.secondVFormGroup = this._formBuilder.group({
      secondVCtrl: ['', Validators.required]
    });
    this.thirdVFormGroup = this._formBuilder.group({
      thirdVCtrl: ''
    });
  }

  toggleOptional() {
    this.optional = !this.optional;
    this.thirdHFormGroup = this._formBuilder.group({
      thirdHCtrl: ''
    });
    this.thirdVFormGroup = this._formBuilder.group({
      thirdVCtrl: ''
    });
  }
}
