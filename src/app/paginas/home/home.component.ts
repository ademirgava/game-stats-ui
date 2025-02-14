import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { ContainerComponent } from "../../componentes/container/container.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [ContainerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private loginService: LoginService, private router: Router) {}

  logout() {
    this.loginService.logout();
    this.router.navigateByUrl('/login');
  }
}
