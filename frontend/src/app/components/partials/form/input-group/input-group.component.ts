import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input-group.component.html',
  styleUrl: './input-group.component.css',
})
export class InputGroupComponent {
  @Input()
  label!: string;
  @Input()
  bgColor: string = 'none';
  @Input()
  exibir_label: number = 0;
}
