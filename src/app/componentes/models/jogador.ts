import { Equipe } from "./equipe";

export interface Jogador {
  id?: number;
  nome: string;
  descricao: string;
  aplido: string;
  foto: string | ArrayBuffer;
  cpf: string;
  rg: string;
  dataNascimento: string;
  dataCriacao: string;
  equipe: Equipe;
  pePredominante: string;
}
