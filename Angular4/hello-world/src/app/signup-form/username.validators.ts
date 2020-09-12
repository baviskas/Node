import {AbstractControl, ValidationErrors} from '@angular/forms';

export class UsernameValidators {
  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    const value: string  = control && control.value;
    if (value.includes(' ')) {
      return {
        cannotContainSpace: true
      };
    }
    return null;
  }

    // static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors| null> {
    //   return new (< ValidationErrors | null> Promise) ((resolve, reject) => {
    //     setTimeout(() => {
    //       if (control.value === 'Sandesh') {
    //         resolve({
    //           shouldBeUnique: true
    //         });
    //       } else {
    //         resolve(null);
    //       }
    //     }, 500);
    //   });
    // }
}
