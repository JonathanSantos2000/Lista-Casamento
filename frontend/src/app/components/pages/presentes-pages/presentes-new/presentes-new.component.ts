import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TextInputComponent } from '../../../partials/form/text-input/text-input.component';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
  FormGroup,
} from '@angular/forms';
import { Room } from '../../../../shared/models/Room.model';
import { Observable } from 'rxjs';
import { UserService } from '../../../../services/user.service';
import { RoomService } from '../../../../services/room.service';

@Component({
  selector: 'app-presentes-new',
  imports: [ReactiveFormsModule, TextInputComponent],
  templateUrl: './presentes-new.component.html',
  styleUrl: './presentes-new.component.css',
})
export class PresentesNewComponent implements OnInit {
  furnituresForm!: FormGroup;
  roomForm!: FormGroup;
  isSubmitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private roomService: RoomService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.furnituresForm = this.formBuilder.group({
      FurNom: ['', [Validators.required, Validators.minLength(5)]],
      FurVlrIte: ['', [Validators.required, Validators.minLength(5)]],
      FurRoomsSearch: [''],
      FurRooms: [this.roomName, Validators.required],
    });

    this.roomForm = this.formBuilder.group({
      _Id: ['', Validators.required],
    });

    this.getAllRooms();
  }

  get fc() {
    return this.furnituresForm.controls;
  }

  submit() {}

  // ---- Room search ----

  room: Room[] = [];
  roomName: string = '';
  roomsFiltered: Room[] = [];

  getAllRooms() {
    let roomObservalbe: Observable<Room[]>;
    roomObservalbe = this.roomService.getAllRooms();

    roomObservalbe.subscribe((serverRoom) => {
      this.room = serverRoom;
      this.roomsFiltered = serverRoom;
    });
  }

  buscarItensPorNome() {
    const parteNome = this.fc['FurRoomsSearch'].value;
    const regex = new RegExp(parteNome, 'i');
    this.roomsFiltered = this.room.filter((room) => regex.test(room.RooNom));
    this.fc['FurRoomsSearch'].setValue('');
  }

  onRoomSelect(event: any) {
    const valorSelecionado = event.target.value;
    const inf = this.room.find((room) => room.RooNom === valorSelecionado);
  }
}
