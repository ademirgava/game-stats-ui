import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Fase } from "../models/fase";
import { FaseTipoComponent } from "../fase-tipo/fase-tipo.component";
import { FaseService } from "../../services/fases/fase.service";
import { ModalComponent } from "../modal/modal.component";

@Component({
  selector: "app-fase",
  imports: [CommonModule, FaseTipoComponent, ModalComponent],
  templateUrl: "./fase.component.html",
  styleUrl: "./fase.component.css",
})
export class FaseComponent implements OnInit {
  @Input() fase!: Fase;

  @ViewChild("deleteModal") deleteModal!: ModalComponent;

  constructor(private faseService: FaseService) {}

  ngOnInit(): void {}

  showModal() {
    this.deleteModal.open();
  }

  onConfirmarClick() {
    this.deletar();
    this.deleteModal.close();
    console.log("Yes");
  }

  onCancelarClick() {
    this.deleteModal.close();
    console.log("No");
  }

  deletar() {
    if (this.fase.id) {
      this.faseService.deletarPorId(this.fase.id).subscribe(() => {
        window.location.reload();
      });
    }
  }
}
