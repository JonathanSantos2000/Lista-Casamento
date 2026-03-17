import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { RoomsComponent } from './components/pages/rooms/rooms.component';
import { PresenteComponent } from './components/pages/presente/presente.component';
import { RegisterPageComponent } from './components/pages/auth/register-page/register-page.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ambiente/:id', component: RoomsComponent },
  { path: 'presente/:id', component: PresenteComponent },
  { path: 'auth/registro', component: RegisterPageComponent },
];
