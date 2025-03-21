import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { NavbarComponent } from "./componentes/navbar/navbar.component";
import { CommonModule } from "@angular/common";
import { LoginService } from "./services/login.service";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, NavbarComponent, CommonModule],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "game-stats-ui";

  constructor(private loginService: LoginService) {}

  isShow(): boolean {
    return this.loginService.isAutenticado();
  }
}
