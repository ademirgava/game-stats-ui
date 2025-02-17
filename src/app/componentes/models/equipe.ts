export interface Equipe {
  id?: number;
  nome: string;
  sigla: string;
  ativo: Boolean;
  logomarca: string | ArrayBuffer;
  dataFundacao: string;
  dataCriacao: string;
  corPrincipal: string;
  corSecundaria: string;
}
