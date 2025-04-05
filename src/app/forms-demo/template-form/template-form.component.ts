import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html'
})
export class TemplateFormComponent {
  submit(form: NgForm) {
    if (form.valid) {
      console.log('Form submitted:', form.value);
    } else {
      console.warn('Form is invalid');
    }
  }
}
