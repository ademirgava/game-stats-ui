import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { RouterLink } from "@angular/router";
import { Jogador } from "../models/jogador";

@Component({
  selector: "app-jogador",
  imports: [CommonModule, RouterLink],
  templateUrl: "./jogador.component.html",
  styleUrl: "./jogador.component.css",
})
export class JogadorComponent {
  @Input() jogador!: Jogador;
  @Input() idEquipe!: number;
}
