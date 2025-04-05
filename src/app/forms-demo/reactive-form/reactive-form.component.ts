import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html'
})
export class ReactiveFormComponent {
  userForm: FormGroup;

  constructor(private fb: FormBuilder ) {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      username: ['', [this.forbiddenNameValidator]],
    })
   }

   forbiddenNameValidator(control: AbstractControl): ValidationErrors | null {
    const forbidden = control.value?.toLowerCase() === 'admin';
    return forbidden ? { forbiddenName: true } : null;
   }

   submit() {
    if (this.userForm.valid) {
      console.log('Reactive Form Submitted', this.userForm.value)
    }
   }

}
