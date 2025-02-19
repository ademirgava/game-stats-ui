import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActivatedRoute, Router, RouterLink } from "@angular/router";

import { ContainerComponent } from "../../../componentes/container/container.component";
import { JogadorComponent } from "../../../componentes/jogador/jogador.component";
import { Jogador } from "../../../componentes/models/jogador";
import { JogadorService } from "../../../services/jogadores/jogador.service";
import { EquipesService } from "../../../services/equipes/equipes.service";
import { Equipe } from "../../../componentes/models/equipe";

@Component({
  selector: "app-listar-jogadores",
  imports: [ContainerComponent, CommonModule, RouterLink, JogadorComponent],
  templateUrl: "./listar-jogadores.component.html",
  styleUrl: "./listar-jogadores.component.css",
})
export class ListarJogadoresComponent implements OnInit {
  jogadores: Jogador[] = [];
  nomeEquipe: string = "";
  corPrincipal: string = "";
  idEquipe!: number;

  constructor(
    private jogadorService: JogadorService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private equipeService: EquipesService
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get("id");
    this.idEquipe = id ? parseInt(id) : 0;
    if (id) {
      this.equipeService.buscarPorEquipeId(parseInt(id)).subscribe((equipe) => {
        this.nomeEquipe = equipe.nome;
        this.corPrincipal = equipe.corPrincipal;
      });
      this.jogadorService
        .getListaJogadoresPorEquipe(parseInt(id))
        .subscribe((jogadores) => {
          this.jogadores = jogadores.content;
        });
    } else {
      this.router.navigateByUrl("/lista-equipes");
    }
  }
}
