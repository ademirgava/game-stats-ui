import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-modal",
  imports: [CommonModule],
  templateUrl: "./modal.component.html",
  styleUrl: "./modal.component.css",
})
export class ModalComponent {
  @Input() title: string = "";
  @Output() confirma = new EventEmitter<any>();
  @Output() cancela = new EventEmitter<any>();

  isOpen = false;

  open() {
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
  }
  onConfirmarClick() {
    this.confirma.emit();
    this.close();
  }

  onCancelarClick() {
    this.cancela.emit();
    this.close();
  }
}
