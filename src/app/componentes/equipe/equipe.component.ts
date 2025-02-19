import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { RouterLink } from "@angular/router";
import { Equipe } from "../models/equipe";

@Component({
  selector: "app-equipe",
  imports: [CommonModule, RouterLink],
  templateUrl: "./equipe.component.html",
  styleUrl: "./equipe.component.css",
})
export class EquipeComponent {
  @Input() equipe!: Equipe;
}
