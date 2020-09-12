import { Component } from '@angular/core';
import {FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import { ChangePasswordValidators} from './change-password.validators';

@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
  form = new FormGroup({
    old: new FormControl('',
      [
        Validators.required,
        Validators.minLength(3)
      ],
      // ChangePasswordValidators.validateOldPassword
    ),
    newPass: new FormControl('',
      [
        Validators.required,
        Validators.minLength(3)
      ]),
    confirm: new FormControl('',
      [
        Validators.required,
        Validators.minLength(3)
      ]),
  },
      ChangePasswordValidators.passwordsMatcher
  );

  get old() {
    return this.form.get('old');
  }
  get newPass() {
    return this.form.get('newPass');
  }
  get confirm() {
    return this.form.get('confirm');
  }
}
