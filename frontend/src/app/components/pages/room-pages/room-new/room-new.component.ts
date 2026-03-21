import { Component, OnInit } from '@angular/core';
import { TextInputComponent } from '../../../partials/form/text-input/text-input.component';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomService } from '../../../../services/room.service';
import { IRoom } from '../../../../shared/interfaces/IRoomRegister';
import { UserService } from '../../../../services/user.service';
import { User } from '../../../../shared/models/user.models';

@Component({
  selector: 'app-room-new',
  imports: [ReactiveFormsModule, TextInputComponent],
  templateUrl: './room-new.component.html',
  styleUrl: './room-new.component.css',
})
export class RoomNewComponent implements OnInit {
  roomForm!: FormGroup;
  isSubmitted: boolean = false;
  user!: User;

  returnUrl: string = '';
  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private roomService: RoomService,
    private userService: UserService,
    private router: Router
  ) {
    this.userService.user$.subscribe((newUser) => {
      this.user = newUser!;
    });
  }

  ngOnInit(): void {
    this.roomForm = this.formBuilder.group({
      comodo: ['', [Validators.required]],
    });
  }

  get fc() {
    return this.roomForm.controls;
  }

  submit() {
    this.isSubmitted = true;
    if (this.roomForm.invalid) return;
    const fv = this.roomForm.value;
    const room: IRoom = {
      RooNom: fv.comodo.toUpperCase(),
      _id: this.user.id,
      UsuCar: this.user.UsuCar!,
    };

    this.roomService.CreateRoom(room).subscribe({
      next: (res) => {
        console.log('Sucesso', res);
        this.roomForm.reset();
        this.fc['comodo'].setValue('');
      },
      error: (err) => {
        console.log('Erro', err);
      },
    });
    
  }
}
