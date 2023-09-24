import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  signupForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.signupForm = this.fb.group({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
    });
  }
}
