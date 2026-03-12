import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { HouseService } from '../../../services/house.service';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  house = inject(HouseService);
  constructor() {}
  ngOnInit(): void {}
}
