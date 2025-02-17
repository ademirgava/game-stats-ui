import { Component, OnInit } from "@angular/core";

import { ContainerComponent } from "../../../componentes/container/container.component";
import { CommonModule } from "@angular/common";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { EquipesService } from "../../../services/equipes/equipes.service";

@Component({
  selector: "app-formulario-equipe",
  imports: [ContainerComponent, CommonModule, ReactiveFormsModule],
  templateUrl: "./formulario-equipe.component.html",
  styleUrl: "./formulario-equipe.component.css",
})
export class FormularioEquipeComponent implements OnInit {
  equipeForm!: FormGroup;

  constructor(
    private equipeService: EquipesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.inicializarFormulario();
    this.carregarEquipe();
  }

  inicializarFormulario(): void {
    this.equipeForm = new FormGroup({
      nome: new FormControl("", Validators.required),
      sigla: new FormControl("", Validators.required),
      logomarca: new FormControl(""),
      dataFundacao: new FormControl(""),
      corPrincipal: new FormControl("", Validators.required),
      corSecundaria: new FormControl("", Validators.required),
    });
  }

  carregarEquipe(): void {
    const id = this.activatedRoute.snapshot.paramMap.get("id");
    if (id) {
      this.equipeService.buscarPorEquipeId(parseInt(id)).subscribe((equipe) => {
        this.equipeForm.patchValue(equipe);
      });
    }
  }

  aoSelecionarArquivo(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.lerArquivo(file);
    }
  }

  lerArquivo(file: File) {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.result) {
        this.equipeForm.get("logomarca")?.setValue(reader.result);
      }
    };
    reader.readAsDataURL(file);
  }

  cancelar() {
    this.equipeForm.reset();
    this.router.navigateByUrl("/lista-equipes");
  }

  salvarEquipe() {
    const novaEquipe = this.equipeForm.value;
    const id = this.activatedRoute.snapshot.paramMap.get("id");
    novaEquipe.id = id ? parseInt(id) : null;

    this.equipeService.editarOuSalvarEquipe(novaEquipe).subscribe((equipe) => {
      this.equipeForm.reset();
      this.router.navigateByUrl("/lista-equipes");
    });
  }
}
