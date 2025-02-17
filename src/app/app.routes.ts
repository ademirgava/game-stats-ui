import { Routes } from "@angular/router";
import { LoginComponent } from "./paginas/login/login.component";
import { HomeComponent } from "./paginas/home/home.component";
import { AuthGuard } from "./guards/auth.guard";
import { ListaEquipesComponent } from "./paginas/equipes/lista-equipes/lista-equipes.component";
import { FormularioEquipeComponent } from "./paginas/equipes/formulario-equipe/formulario-equipe.component";

export const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent, canActivate: [AuthGuard] },
  {
    path: "lista-equipes",
    component: ListaEquipesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "formulario-equipe",
    component: FormularioEquipeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "formulario-equipe/:id",
    component: FormularioEquipeComponent,
    canActivate: [AuthGuard],
  },
];
