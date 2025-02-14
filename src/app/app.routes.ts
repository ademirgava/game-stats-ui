import { Routes } from '@angular/router';
import { LoginComponent } from './paginas/login/login.component';
import { HomeComponent } from './paginas/home/home.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
    {path:'', redirectTo: '/home', pathMatch: 'full'},
    {path:'home', component: HomeComponent, canActivate: [AuthGuard]},
    {path:'login', component: LoginComponent}
];
