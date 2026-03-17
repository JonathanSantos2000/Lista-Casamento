import { Component, Input } from '@angular/core';
import type { Room } from '../../../shared/models/Room.model';


@Component({
  standalone: true,
  selector: 'app-rooms',
  imports: [],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css',
})
export class RoomsComponent {
  @Input() room!: Room;
}
