import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Page } from "../../componentes/models/page";
import { Observable } from "rxjs";
import { Jogador } from "../../componentes/models/jogador";
import { Equipe } from "../../componentes/models/equipe";

@Injectable({
  providedIn: "root",
})
export class JogadorService {
  private readonly API = "http://localhost:8080/api/jogadores";

  constructor(private http: HttpClient) {}

  getListaJogadoresPorEquipe(id: number): Observable<Page> {
    return this.http.get<Page>(`${this.API}/equipe/${id}`);
  }

  getJogador(id: number): Observable<Jogador> {
    return this.http.get<Jogador>(`${this.API}/${id}`);
  }

  salvarJogador(jogador: Jogador, equipe: Equipe) {
    jogador.equipe = equipe;
    return this.http.post<Jogador>(this.API, jogador);
  }

  editarJogador(jogador: Jogador) {
    return this.http.put<Jogador>(this.API, jogador);
  }
}
