import { Routes } from "@angular/router";
import { LoginComponent } from "./paginas/login/login.component";
import { HomeComponent } from "./paginas/home/home.component";
import { AuthGuard } from "./guards/auth.guard";
import { ListaEquipesComponent } from "./paginas/equipes/lista-equipes/lista-equipes.component";
import { FormularioEquipeComponent } from "./paginas/equipes/formulario-equipe/formulario-equipe.component";
import { ListarJogadoresComponent } from "./paginas/jogadores/listar-jogadores/listar-jogadores.component";
import { FormularioJogadorComponent } from "./paginas/jogadores/formulario-jogador/formulario-jogador.component";
import { ListarCampeonatosComponent } from "./paginas/campeonatos/listar-campeonatos/listar-campeonatos.component";
import { FormularioCampeonatoComponent } from "./paginas/campeonatos/formulario-campeonato/formulario-campeonato.component";
import { ListarFasesComponent } from "./paginas/fases/listar-fases/listar-fases.component";

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
  {
    path: "lista-jogador/:id",
    component: ListarJogadoresComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "formulario-jogador",
    component: FormularioJogadorComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "formulario-jogador/:id",
    component: FormularioJogadorComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "lista-campeonatos",
    component: ListarCampeonatosComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "formulario-campeonato",
    component: FormularioCampeonatoComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "formulario-campeonato/:id",
    component: FormularioCampeonatoComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "listar-fases/:id",
    component: ListarFasesComponent,
    canActivate: [AuthGuard],
  },
];
