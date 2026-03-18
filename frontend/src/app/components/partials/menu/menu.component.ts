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
  menu_level: string = 'off';

  user!: User;
  constructor(private userService: UserService, private router: Router) {
    this.userService.user$.subscribe((newUser) => {
      this.user = newUser!;
    });
  }
  open_menu() {
    this.menu_level = 'menu';
  }

  back_menu() {
    this.menu_level = 'off';
  }
}
