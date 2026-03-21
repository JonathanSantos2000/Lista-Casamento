import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { RegisterPageComponent } from './components/pages/auth/register-page/register-page.component';
import { LoginPageComponent } from './components/pages/auth/login-page/login-page.component';
import { RoomNewComponent } from './components/pages/room-pages/room-new/room-new.component';
import { PresentesListComponent } from './components/pages/presentes-pages/presentes-list/presentes-list.component';
import { PresentesNewComponent } from './components/pages/presentes-pages/presentes-new/presentes-new.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'rooms/room-new', component: RoomNewComponent },
  { path: 'rooms/room-edit', component: RoomNewComponent },
  { path: 'rooms/room-list', component: RoomNewComponent },
  { path: 'auth/registro', component: RegisterPageComponent },
  { path: 'auth/login', component: LoginPageComponent },
  { path: 'presentes/lista-de-presentes', component: PresentesListComponent },
  { path: 'presentes/presentes-new', component: PresentesNewComponent },
];
