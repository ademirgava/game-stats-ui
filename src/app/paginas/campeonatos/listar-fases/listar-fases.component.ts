import {
  Component,
  ComponentRef,
  ElementRef,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from "@angular/core";
import { CommonModule } from "@angular/common";

import { ContainerComponent } from "../../../componentes/container/container.component";
import { Fase } from "../../../componentes/models/fase";
import { FaseService } from "../../../services/fases/fase.service";
import { FormularioFaseComponent } from "../../formulario-fase/formulario-fase.component";
import { FaseComponent } from "../../../componentes/fase/fase.component";
import { ActivatedRoute } from "@angular/router";
import { CampeonatoFaseTipo } from "../../../componentes/models/campeonatoFaseTipo";

@Component({
  selector: "app-listar-fases",
  imports: [ContainerComponent, CommonModule, FaseComponent],
  templateUrl: "./listar-fases.component.html",
  styleUrl: "./listar-fases.component.css",
})
export class ListarFasesComponent implements OnInit {
  fases: Fase[] = [];
  fasesTipos: CampeonatoFaseTipo[] = [];
  showAdd: boolean = false;

  @ViewChild("fase") novaFaseElement!: ElementRef<HTMLElement>;

  constructor(
    private cameponatoFaseService: FaseService,
    private viewContainerRef: ViewContainerRef,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get("id");

    if (id) {
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
      this.showAdd = true;
    }
  }

  getUltimaOrdem(): number {
    var ordem = 1;
    if (this.fases) {
      const max = this.fases.sort((a, b) => a.ordem - b.ordem);
      ordem = max[max.length - 1].ordem + 1;
    }
    return ordem;
  }
  cancelar() {}
}
