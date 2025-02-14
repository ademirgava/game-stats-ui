import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-equipe',
  imports: [
    CommonModule
  ],
  templateUrl: './equipe.component.html',
  styleUrl: './equipe.component.css'
})
export class EquipeComponent {
  @Input() id?: number;
  @Input() nome: string = '';
  @Input() sigla: string = '';
  @Input() ativo: Boolean = true;
  @Input() logomarca: string | ArrayBuffer  = '';
  @Input() dataFundacao: string = '';
  @Input() dataCriacao: string = '';
  @Input() corPrincipal: string = '';
  @Input() corSecundaria: string = '';
}
