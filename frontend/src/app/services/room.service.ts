import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {
  GET_ALL_ROOMS_URL,
  ROOMS_REGISTER_URL,
} from '../shared/constants/urls';
import { tap, Observable } from 'rxjs';
import { Room } from '../shared/models/Room.model';
import { IRoom } from '../shared/interfaces/IRoomRegister';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  constructor(private http: HttpClient, private toastrService: ToastrService) {}

  CreateRoom(roomRegister: IRoom): Observable<Room> {
    return this.http.post<Room>(ROOMS_REGISTER_URL, roomRegister).pipe(
      tap({
        next: (room) => {
          this.toastrService.success(
            `Cômodo: ${room.RooNom} registrada com sucesso`
          );
        },
        error: (errorResponse) => {
          this.toastrService.error(errorResponse.error, ' registro falhou');
        },
      })
    );
  }

  getAllRooms(): Observable<Room[]> {
    return this.http.get<Room[]>(GET_ALL_ROOMS_URL);
  }
}
