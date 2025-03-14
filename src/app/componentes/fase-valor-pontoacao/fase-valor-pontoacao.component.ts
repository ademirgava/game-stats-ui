import { Component, Input } from "@angular/core";
import { CampeonatoValorPontoacao } from "../models/campeonatoValorPontoaca";

@Component({
  selector: "app-fase-valor-pontoacao",
  imports: [],
  templateUrl: "./fase-valor-pontoacao.component.html",
  styleUrl: "./fase-valor-pontoacao.component.css",
})
export class FaseValorPontoacaoComponent {
  @Input() valorPontoacao!: CampeonatoValorPontoacao;
}
