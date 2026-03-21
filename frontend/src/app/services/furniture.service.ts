import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Furniture } from '../shared/models/furniture.model';
import {
  FURNITURES_REGISTER_URL,
  GET_ALL_FURNITURES_URL,
} from '../shared/constants/urls';
import { tap, Observable } from 'rxjs';
import { IFurnRegister } from '../shared/interfaces/IFurnitureRegister';

@Injectable({
  providedIn: 'root',
})
export class FurnitureService {
  constructor(private http: HttpClient, private toastrService: ToastrService) {}

  CreateRoom(furnitureRegister: IFurnRegister): Observable<Furniture> {
    return this.http
      .post<Furniture>(FURNITURES_REGISTER_URL, furnitureRegister)
      .pipe(
        tap({
          next: (furniture) => {
            this.toastrService.success(
              `Presentes: ${furniture.FurNom} registrada com sucesso`
            );
          },
          error: (errorResponse) => {
            this.toastrService.error(errorResponse.error, ' registro falhou');
          },
        })
      );
  }

  getAllRooms(): Observable<Furniture[]> {
    return this.http.get<Furniture[]>(GET_ALL_FURNITURES_URL);
  }
}
