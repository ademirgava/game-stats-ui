import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Page } from "../../componentes/models/page";
import { Campeonato } from "../../componentes/models/campeonato";

@Injectable({
  providedIn: "root",
})
export class CampeonatosService {
  private readonly API = "http://localhost:8080/api/campeonatos";

  constructor(private http: HttpClient) {}

  obterTodasEquipes(): Observable<Page> {
    return this.http.get<Page>(this.API);
  }

  buscarPorId(id: number): Observable<Campeonato> {
    return this.http.get<Campeonato>(`${this.API}/${id}`);
  }

  salvarCampeonato(campeonato: Campeonato) {
    return this.http.post<Campeonato>(this.API, campeonato);
  }

  atualizarCampeonato(campeonato: Campeonato) {
    return this.http.put<Campeonato>(this.API, campeonato);
  }
}
