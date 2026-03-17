import { Component, Input } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { InputGroupComponent } from '../input-group/input-group.component';
import { InputValidationComponent } from '../input-validation/input-validation.component';

@Component({
  selector: 'text-input',
  standalone: true,
  imports: [InputGroupComponent, InputValidationComponent, ReactiveFormsModule],
  templateUrl: './text-input.component.html',
  styleUrl: './text-input.component.css',
})
export class TextInputComponent {
  @Input()
  control!: AbstractControl;
  @Input()
  showErrorWhen: boolean = true;
  @Input()
  label!: string;
  @Input()
  type: 'text' | 'password' | 'email' | 'number' = 'text';

  get formControl() {
    return this.control as FormControl;
  }
}
