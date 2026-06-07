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
import { CommonModule } from '@angular/common';
import { FurnitureService } from '../../../../services/furniture.service';
import { RoomService } from '../../../../services/room.service';
import { User } from '../../../../shared/models/user.models';

@Component({
  selector: 'app-presentes-new',
  imports: [ReactiveFormsModule, TextInputComponent, CommonModule],
  templateUrl: './presentes-new.component.html',
  styleUrl: './presentes-new.component.css',
})
export class PresentesNewComponent implements OnInit {
  furnituresForm!: FormGroup;
  roomForm!: FormGroup;
  user!: User;

  isSubmitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private furnitureService: FurnitureService,
    private roomService: RoomService,
    private userService: UserService
  ) {
    this.userService.user$.subscribe((newUser) => {
      this.user = newUser!;
    });
  }

  ngOnInit(): void {
    this.furnituresForm = this.formBuilder.group({
      FurDes: ['', [Validators.required, Validators.minLength(5)]],
      FurVlrIte: [, [Validators.required]],
      FurRoomsSearch: [''],
      FurRooms: [this.roomName, Validators.required],
      FurImg: [null],
    });

    this.roomForm = this.formBuilder.group({
      _Id: ['', Validators.required],
    });

    this.getAllRooms();
  }

  get fc() {
    return this.furnituresForm.controls;
  }

  get rc() {
    return this.roomForm.controls;
  }

  selectedFile!: File;

  submit() {
    this.isSubmitted = true;

    if (this.furnituresForm.invalid) {
      return;
    }

    const formData = new FormData();
    formData.append('id', this.user.id);
    formData.append('UsuCar', this.user.UsuCar.toString());

    formData.append('FurDes', this.fc['FurDes'].value);

    const roomPayload = {
      FurComId: this.selectedRoom._id,
      FurComDes: this.selectedRoom.RooNom,
    };

    formData.append('FurRooms', JSON.stringify([roomPayload]));
    formData.append('FurVlrIte', this.fc['FurVlrIte'].value);
    formData.append('FurImg', this.selectedFile);

    this.furnitureService.CreateFurniture(formData).subscribe(() => {
      this.isSubmitted = false;
      this.furnituresForm.reset();
      this.roomForm.reset();
      this.imagePreview = null;
      this.selectedRoom = {} as Room;
      this.selectedFile = {} as File;
    });
  }

  // ---- Room search ----
  room: Room[] = [];
  roomName: string = '';
  roomsFiltered: Room[] = [];
  selectedRoom!: Room;

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
    const room = this.room.find((r) => r.RooNom === valorSelecionado);

    if (room) {
      this.selectedRoom = room;
    }
  }

  imagePreview: string | null = null;

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      const file = input.files[0];

      this.selectedFile = file; // 🔥 ESSENCIAL

      // preview continua ok
      const reader = new FileReader();

      reader.onload = () => {
        this.imagePreview = reader.result as string;
      };

      reader.readAsDataURL(file);
    }
  }
}
