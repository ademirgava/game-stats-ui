import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

import { ContainerComponent } from "../../../componentes/container/container.component";
import { JogadorService } from "../../../services/jogadores/jogador.service";
import { Equipe } from "../../../componentes/models/equipe";
import { EquipesService } from "../../../services/equipes/equipes.service";

@Component({
  selector: "app-formulario-jogador",
  imports: [CommonModule, ContainerComponent, ReactiveFormsModule],
  templateUrl: "./formulario-jogador.component.html",
  styleUrl: "./formulario-jogador.component.css",
})
export class FormularioJogadorComponent implements OnInit {
  jogadorForm!: FormGroup;
  equipe!: Equipe;

  constructor(
    private jogadorService: JogadorService,
    private equipeService: EquipesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.inicializarFormulario();
    this.carregarJogador();
  }

  inicializarFormulario(): void {
    this.jogadorForm = new FormGroup({
      nome: new FormControl("", Validators.required),
      apelido: new FormControl("", Validators.required),
      foto: new FormControl(""),
      dataNascimento: new FormControl(""),
      descricao: new FormControl("", Validators.required),
      cpf: new FormControl("", Validators.required),
      rg: new FormControl("", Validators.required),
      pePredominante: new FormControl("", Validators.required),
    });
  }

  carregarJogador() {
    const id = this.activatedRoute.snapshot.paramMap.get("id");
    if (id) {
      this.jogadorService.getJogador(parseInt(id)).subscribe((jogador) => {
        this.jogadorForm.patchValue(jogador);
      });
    }

    this.activatedRoute.queryParamMap.subscribe((params) => {
      const lista = params.getAll("equipeId");
      const equipeId = lista ? parseInt(lista[0]) : 0;
      this.equipeService.buscarPorEquipeId(equipeId).subscribe((equipe) => {
        this.equipe = equipe;
      });
    });
  }

  salvarJogador() {
    const id = this.activatedRoute.snapshot.paramMap.get("id");
    const jogadorEquipe = this.jogadorForm.value;
    jogadorEquipe.id = id ? parseInt(id) : null;

    if (id) {
      this.jogadorService.editarJogador(jogadorEquipe).subscribe((jogador) => {
        this.resetar();
      });
    } else {
      this.jogadorService
        .salvarJogador(jogadorEquipe, this.equipe)
        .subscribe((jogador) => {
          this.resetar();
        });
    }
  }

  cancelar() {
    this.resetar();
  }

  resetar() {
    this.jogadorForm.reset();
    this.router.navigateByUrl(`/lista-jogador/${this.equipe.id}`);
  }
}
