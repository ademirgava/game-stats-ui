import { Component, Input } from "@angular/core";
import { CampeonatoFaseTipo } from "../models/campeonatoFaseTipo";
import { FaseValorPontoacaoComponent } from "../fase-valor-pontoacao/fase-valor-pontoacao.component";

@Component({
  selector: "app-fase-tipo",
  imports: [FaseValorPontoacaoComponent],
  templateUrl: "./fase-tipo.component.html",
  styleUrl: "./fase-tipo.component.css",
})
export class FaseTipoComponent {
  @Input() faseTipo!: CampeonatoFaseTipo;
}
