import { Component, OnInit } from '@angular/core';
import { FurnitureService } from '../../../../services/furniture.service';
import { UserService } from '../../../../services/user.service';
import { CommonModule } from '@angular/common';
import { Furniture } from '../../../../shared/models/furniture.model';

@Component({
  selector: 'app-presentes-list',
  imports: [CommonModule],
  templateUrl: './presentes-list.component.html',
  styleUrl: './presentes-list.component.css',
})
export class PresentesListComponent implements OnInit {
  page = 1;
  totalPages = 1;
  furnitures: Furniture[] = [];
  constructor(
    private furnitureService: FurnitureService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.loadFurnitures();
  }

  loadFurnitures() {
    this.furnitureService.GetAllFurnitures(this.page).subscribe((response) => {
      this.furnitures = response.furnitures;
      this.totalPages = response.totalPages;
    });
  }

  nextPage() {
    if (this.page < this.totalPages) {
      this.page++;
      this.loadFurnitures();
    }
  }

  previousPage() {
    if (this.page > 1) {
      this.page--;
      this.loadFurnitures();
    }
  }
  searchTerm: string = '';
  buscarItensPorNome(): void {
    // Add logic to filter or search items based on 'searchTerm'
    console.log('Searching for items with term:', this.searchTerm);
  }

  valorTotal = 100;
  valorPago = 10;

  get porcentagem(): number {
    return Math.round((this.valorPago / this.valorTotal) * 100);
  }

  get valorRestante(): number {
    return this.valorTotal - this.valorPago;
  }

  get status(): string {
    if (this.porcentagem >= 100) return 'Concluído';
    if (this.porcentagem >= 70) return 'Quase Completo';
    return 'Disponível';
  }

  get progressClass(): string {
    if (this.porcentagem >= 100) return 'completed';
    if (this.porcentagem >= 70) return 'high';
    if (this.porcentagem >= 30) return 'medium';
    return 'low';
  }
}
