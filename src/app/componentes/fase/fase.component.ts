import { Component, Input, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Fase } from "../models/fase";
import { FaseTipoComponent } from "../fase-tipo/fase-tipo.component";
import { FaseService } from "../../services/fases/fase.service";

@Component({
  selector: "app-fase",
  imports: [CommonModule, FaseTipoComponent],
  templateUrl: "./fase.component.html",
  styleUrl: "./fase.component.css",
})
export class FaseComponent implements OnInit {
  @Input() fase!: Fase;

  constructor(private faseService: FaseService) {}

  ngOnInit(): void {}

  deletar() {
    if (this.fase.id) {
      this.faseService.deletarPorId(this.fase.id).subscribe(() => {
        window.location.reload();
      });
    }
  }
}
