import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EquipesService } from '../../../services/equipes/equipes.service';
import { Equipe } from '../../../componentes/models/equipe';
import { EquipeComponent } from '../../../componentes/equipe/equipe.component';
import { ContainerComponent } from "../../../componentes/container/container.component";

@Component({
  selector: 'app-lista-equipes',
  imports: [
    CommonModule,
    EquipeComponent,
    FormsModule,
    ContainerComponent
],
  templateUrl: './lista-equipes.component.html',
  styleUrl: './lista-equipes.component.css'
})
export class ListaEquipesComponent implements OnInit{

  equipes: Equipe[] = [];

  constructor(private equipesService: EquipesService){}

  ngOnInit(): void {
    this.equipesService.obterTodasEquipes().subscribe(listaEquipes => {
      this.equipes = listaEquipes.content;
    })    
  }
}
