import { Campeonato } from "./campeonato";
import { CampeonatoFaseTipo } from "./campeonatoFaseTipo";

export interface Fase {
  id?: number;
  campeonato: Campeonato;
  campeonatoFaseTipo: CampeonatoFaseTipo;
  ordem: number;
  nome: string;
}
