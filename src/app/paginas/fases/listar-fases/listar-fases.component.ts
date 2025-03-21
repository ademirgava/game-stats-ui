import {
  Component,
  ComponentRef,
  ElementRef,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActivatedRoute, Router } from "@angular/router";

import { ContainerComponent } from "../../../componentes/container/container.component";
import { Fase } from "../../../componentes/models/fase";
import { FaseService } from "../../../services/fases/fase.service";
import { FaseComponent } from "../../../componentes/fase/fase.component";
import { CampeonatoFaseTipo } from "../../../componentes/models/campeonatoFaseTipo";
import { CampeonatosService } from "../../../services/campeonatos/campeonatos.service";
import { FormularioFaseComponent } from "../formulario-fase/formulario-fase.component";

@Component({
  selector: "app-listar-fases",
  imports: [ContainerComponent, CommonModule, FaseComponent],
  templateUrl: "./listar-fases.component.html",
  styleUrl: "./listar-fases.component.css",
})
export class ListarFasesComponent implements OnInit {
  fases: Fase[] = [];
  fasesTipos: CampeonatoFaseTipo[] = [];
  showAdd: boolean = true;
  campeontaNome: string = "";

  @ViewChild("fase") novaFaseElement!: ElementRef<HTMLElement>;

  constructor(
    private cameponatoFaseService: FaseService,
    private viewContainerRef: ViewContainerRef,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private campeonatoService: CampeonatosService
  ) {}

  ngOnInit(): void {
    this.showAdd = true;
    const id = this.activatedRoute.snapshot.paramMap.get("id");

    if (id) {
      this.campeonatoService
        .buscarPorId(parseInt(id))
        .subscribe((campeonato) => {
          this.campeontaNome = campeonato.nome;
        });
      this.cameponatoFaseService
        .getFasesPorCampeonato(parseInt(id))
        .subscribe((fase) => {
          this.fases = fase.sort((a, b) => {
            if (a.ordem < b.ordem) {
              return -1;
            }
            if (a.ordem > b.ordem) {
              return 1;
            }
            return 0;
          });
        });
    }
  }

  appendComponent() {
    const id = this.activatedRoute.snapshot.paramMap.get("id");

    if (id) {
      const component: ComponentRef<FormularioFaseComponent> =
        this.viewContainerRef.createComponent(FormularioFaseComponent);
      component.setInput("campeonatoId", id);
      component.setInput("ordem", this.getUltimaOrdem());
      const element: HTMLElement = component.location.nativeElement;
      element.contentEditable = "false";

      this.novaFaseElement.nativeElement.appendChild(element);
      this.showAdd = false;
    }
  }

  getUltimaOrdem(): number {
    var ordem = 1;
    if (this.fases != null && this.fases.length > 0) {
      const max = this.fases.sort((a, b) => a.ordem - b.ordem);
      ordem = max[max.length - 1].ordem + 1;
    }
    return ordem;
  }

  cancelar() {
    this.router.navigateByUrl("/lista-campeonatos");
  }
}
