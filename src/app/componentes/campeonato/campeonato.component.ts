import { Component, Input } from "@angular/core";
import { Campeonato } from "../models/campeonato";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-campeonato",
  imports: [CommonModule, RouterLink],
  templateUrl: "./campeonato.component.html",
  styleUrl: "./campeonato.component.css",
})
export class CampeonatoComponent {
  @Input() campeonato!: Campeonato;
}
