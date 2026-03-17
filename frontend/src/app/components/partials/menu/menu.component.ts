import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  menu_level: string = 'menu';

  open_menu() {
    this.menu_level = 'menu';
  }

  back_menu() {
    this.menu_level = 'off';
  }
}
