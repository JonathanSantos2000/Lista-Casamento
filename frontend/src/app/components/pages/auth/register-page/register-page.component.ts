import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { TextInputComponent } from '../../../partials/form/text-input/text-input.component';
import { PasswordMatchValidator } from '../../../../shared/validators/password_match_validator';
import { IUserRegister } from '../../../../shared/interfaces/IUserRegister';
import { ActivatedRoute, Router, RouterModule, RouterLink } from '@angular/router';
import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [ReactiveFormsModule, TextInputComponent, RouterLink],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css',
})
export class RegisterPageComponent implements OnInit {
  dataAtual = new Date();
  dataFormatada = this.dataAtual.toLocaleDateString('pt-BR');
  registerForm!: FormGroup;
  isSubmitted: boolean = false;
  returnUrl: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {}

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
    this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'];
  }

  get fc() {
    return this.registerForm.controls;
  }

  submit() {
    this.isSubmitted = true;
    if (this.registerForm.invalid) return;

    const fv = this.registerForm.value;
    const user: IUserRegister = {
      UsuNom: fv.name,
      UsuEmail: fv.email,
      UsuSen: fv.password,
      UsuSenCon: fv.confirmPassword,
      UsuCar: 0,
      UsuDatCad: this.dataFormatada,
    };

    this.userService.register(user).subscribe(() => {
      this.router.navigateByUrl(this.returnUrl);
    });
  }
}
