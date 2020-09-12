import { AbstractControl, ValidationErrors } from '@angular/forms';

export class ChangePasswordValidators {
  // static validateOldPassword (control: AbstractControl): Promise< ValidationErrors | null> {
  //   return new (<ValidationErrors>Promise)((resolve, reject) => {
  //     setTimeout(() => {
  //       if (control.value !== 'sandesh') {
  //         resolve({invalidOldPassword: true});
  //       } else {
  //         resolve(null);
  //       }
  //     }, 500);
  //   });
  // }

  static passwordsMatcher (control: AbstractControl): ValidationErrors| null {
    const newPassword = control.get('newPass').value;
    const confirmPassword = control.get('confirm').value;
    if (newPassword !== confirmPassword) {
      return {
        passwordsShouldMatch: true
      };
    }
    return null;
  }
}
