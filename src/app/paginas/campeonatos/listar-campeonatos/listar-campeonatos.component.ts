import { Component, OnInit } from "@angular/core";
import { RouterLink } from "@angular/router";

import { ContainerComponent } from "../../../componentes/container/container.component";
import { Campeonato } from "../../../componentes/models/campeonato";
import { CampeonatoComponent } from "../../../componentes/campeonato/campeonato.component";
import { CampeonatosService } from "../../../services/campeonatos/campeonatos.service";

@Component({
  selector: "app-listar-campeonatos",
  imports: [ContainerComponent, RouterLink, CampeonatoComponent],
  templateUrl: "./listar-campeonatos.component.html",
  styleUrl: "./listar-campeonatos.component.css",
})
export class ListarCampeonatosComponent implements OnInit {
  campeonatos: Campeonato[] = [];

  constructor(private campeonatoService: CampeonatosService) {}

  ngOnInit(): void {
    this.campeonatoService.obterTodasEquipes().subscribe((pageCampeonatos) => {
      this.campeonatos = pageCampeonatos.content;
    });
  }
}
