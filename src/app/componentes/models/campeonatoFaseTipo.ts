import { CampeonatoValorPontoacao } from "./campeonatoValorPontoaca";

export interface CampeonatoFaseTipo {
  id?: number;
  tipo: string;
  descricao: string;
  idaVolta: boolean;
  quantidadeEquipes: number;
  quantidadeGrupos: number;
  campeonatoValorPontoacao: CampeonatoValorPontoacao;
  ativo: boolean;
}
