import { Component, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  Validators,
  FormGroup,
  FormBuilder,
} from '@angular/forms';
import { TextInputComponent } from '../../../partials/form/text-input/text-input.component';
import { PasswordMatchValidator } from '../../../../shared/validators/password_match_validator';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [ReactiveFormsModule, TextInputComponent],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css',
})
export class RegisterPageComponent implements OnInit {
  registerForm!: FormGroup;
  isSubmitted: boolean = false;

  returnUrl: string = '';
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group(
      {
        name: ['', [Validators.required, Validators.minLength(5)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(5)]],
        confirmPassword: ['', Validators.required],
      },
      {
        validators: PasswordMatchValidator('password', 'confirmPassword'),
      }
    );
  }

  get fc() {
    return this.registerForm.controls;
  }

  submit() {}
}
