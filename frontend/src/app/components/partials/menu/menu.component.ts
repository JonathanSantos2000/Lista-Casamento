import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { User } from '../../../shared/models/user.models';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  menu_level: 'off' | 'menu' = 'off';
  menu_center: 'normal' | 'admin' | 'comodo' = 'normal';

  user!: User;
  constructor(private userService: UserService, private router: Router) {
    this.userService.user$.subscribe((newUser) => {
      this.user = newUser!;
    });
  }

  // =========================
  // GETTERS
  // =========================

  get isAuth(): boolean {
    return !!this.user?.UsuTok;
  }

  get isAdmin(): boolean {
    return this.user?.UsuCar === 1;
  }

  get firstName(): string {
    return this.user?.UsuNom?.split(' ')[0] || '';
  }

  // =========================
  // MENU ACTIONS
  // =========================
  open_menu() {
    this.menu_level = 'menu';
    console.log(this.user.id);
  }

  close_menu() {
    this.menu_level = 'off';
    this.menu_center = 'normal';
  }

  back_menu() {
    if (this.menu_center === 'normal') {
      this.menu_level = 'off';
    } else if (this.menu_center === 'admin') {
      this.menu_center = 'normal';
    } else if (this.menu_center === 'comodo') {
      this.menu_center = 'admin';
    }
  }

  menuAdm() {
    this.menu_center = 'admin';
  }

  menuComodo() {
    this.menu_center = 'comodo';
  }

  logout() {
    this.userService.logout();
  }
}
