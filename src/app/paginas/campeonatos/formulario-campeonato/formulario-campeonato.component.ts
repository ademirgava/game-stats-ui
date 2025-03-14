import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActivatedRoute, Router } from "@angular/router";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";

import { CampeonatosService } from "../../../services/campeonatos/campeonatos.service";
import { ContainerComponent } from "../../../componentes/container/container.component";

@Component({
  selector: "app-formulario-campeonato",
  imports: [ContainerComponent, CommonModule, ReactiveFormsModule],
  templateUrl: "./formulario-campeonato.component.html",
  styleUrl: "./formulario-campeonato.component.css",
})
export class FormularioCampeonatoComponent implements OnInit {
  campeonatoForm!: FormGroup;

  constructor(
    private campeonatoService: CampeonatosService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.inicializarFormulario();
    this.carregarCampeonato();
  }

  inicializarFormulario() {
    this.campeonatoForm = new FormGroup({
      nome: new FormControl("", Validators.required),
      descricao: new FormControl("", Validators.required),
      dataInicio: new FormControl(""),
      dataFinal: new FormControl(""),
      quantidadeMaximaEquipes: new FormControl("", Validators.required),
    });
  }

  carregarCampeonato() {
    const id = this.activatedRoute.snapshot.paramMap.get("id");

    if (id) {
      this.campeonatoService
        .buscarPorId(parseInt(id))
        .subscribe((campeonato) => {
          this.campeonatoForm.patchValue(campeonato);
        });
    }
  }

  salvarEquipe() {
    const id = this.activatedRoute.snapshot.paramMap.get("id");
    const novoCampeonato = this.campeonatoForm.value;

    if (id) {
      novoCampeonato.id = id;
    } else {
      this.campeonatoService.salvarCampeonato(novoCampeonato).subscribe(() => {
        this.resetarFormularioIrLista();
      });
    }
  }

  cancelar() {
    this.resetarFormularioIrLista();
  }

  resetarFormularioIrLista() {
    this.campeonatoForm.reset();
    this.router.navigateByUrl("/lista-campeonatos");
  }
}
