export interface Campeonato {
  id?: number;
  nome: string;
  descricao: string;
  dataInicio: string;
  dataFinal: string;
  quantidadeMaximaEquipes: number;
  iniciado: boolean;
}
