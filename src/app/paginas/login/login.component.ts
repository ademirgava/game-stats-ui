import { Component, OnInit } from "@angular/core";
import { ContainerComponent } from "../../componentes/container/container.component";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { CommonModule } from "@angular/common";

import { LoginService } from "../../services/login.service";

@Component({
  selector: "app-login",
  imports: [ContainerComponent, CommonModule, ReactiveFormsModule],
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.css",
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.inicializarFormulario();
  }

  inicializarFormulario() {
    this.loginForm = new FormGroup({
      login: new FormControl("", Validators.required),
      senha: new FormControl("", Validators.required),
    });
  }

  logar(): void {
    const login = this.loginForm.value;

    this.loginService.logar(login).subscribe((token) => {
      if (token != "") {
        this.loginService.autenticar(token);
        this.router.navigateByUrl("/home");
      } else {
        console.log("Usuário ou senha inválida!");
      }
    });
  }
}
