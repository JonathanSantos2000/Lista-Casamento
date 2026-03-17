import { Component } from '@angular/core';
import { LayoutComponent } from './components/partials/layout/layout.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [LayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'frontend';
}
