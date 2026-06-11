import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Furniture } from '../shared/models/furniture.model';
import {
  FURNITURES_REGISTER_URL,
  GET_ALL_FURNITURES_URL,
} from '../shared/constants/urls';
import { tap, Observable } from 'rxjs';
import type { FurniturePagination } from '../shared/interfaces/IFurniturePagination';

@Injectable({
  providedIn: 'root',
})
export class FurnitureService {
  constructor(private http: HttpClient, private toastrService: ToastrService) {}

  CreateFurniture(formData: FormData): Observable<Furniture> {
    return this.http.post<Furniture>(FURNITURES_REGISTER_URL, formData).pipe(
      tap({
        next: (furniture) => {
          this.toastrService.success(
            `Presentes: ${furniture.FurDes} registrada com sucesso`
          );
        },
        error: (errorResponse) => {
          this.toastrService.error(errorResponse.error, ' registro falhou');
        },
      })
    );
  }

  GetAllFurnitures(page: number = 1): Observable<FurniturePagination> {
    return this.http.get<FurniturePagination>(
      `${GET_ALL_FURNITURES_URL}?page=${page}&limit=10`
    );
  }
}
