import { Component, Input, OnInit } from "@angular/core";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";

import { ContainerComponent } from "../../componentes/container/container.component";
import { CommonModule } from "@angular/common";
import { FaseTipoService } from "../../services/fases/fase-tipo.service";
import { CampeonatoFaseTipo } from "../../componentes/models/campeonatoFaseTipo";
import { FaseService } from "../../services/fases/fase.service";
import { FaseNova } from "../../componentes/models/faseNova";

@Component({
  selector: "app-formulario-fase",
  imports: [ContainerComponent, CommonModule, ReactiveFormsModule],
  templateUrl: "./formulario-fase.component.html",
  styleUrl: "./formulario-fase.component.css",
})
export class FormularioFaseComponent implements OnInit {
  @Input() id!: number;
  @Input() campeonatoId!: number;
  @Input() ordem!: number;

  fasesTipos: CampeonatoFaseTipo[] = [];
  faseForm!: FormGroup;

  novaFase!: FaseNova;

  constructor(
    private campeonatoFaseTipoService: FaseTipoService,
    private faseService: FaseService
  ) {}

  ngOnInit(): void {
    this.inicializarFormulario();

    this.campeonatoFaseTipoService.obterTodosOsTipo().subscribe((lista) => {
      this.fasesTipos = lista;
      this.carregarFase();
    });
  }

  inicializarFormulario() {
    this.faseForm = new FormGroup({
      campeonatoFaseTipoId: new FormControl("", Validators.required),
      ordem: new FormControl(this.ordem, Validators.required),
      nome: new FormControl("", Validators.required),
    });
  }

  carregarFase() {
    if (this.id) {
      //    this.faseService.getFaseById(this.id);
    } else {
    }
  }

  salvarFase() {
    if (this.campeonatoId) {
      this.novaFase = this.faseForm.value;
      this.novaFase.campeonatoId = this.campeonatoId;
      console.log(this.novaFase);
      this.faseService.salvar(this.novaFase).subscribe(() => {
        this.reset();
      });
    }
  }

  cancelar() {
    this.reset();
  }

  reset() {
    this.faseForm.reset();
    window.location.reload();
  }
}
