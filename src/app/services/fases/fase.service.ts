import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Fase } from "../../componentes/models/fase";
import { FaseNova } from "../../componentes/models/faseNova";

@Injectable({
  providedIn: "root",
})
export class FaseService {
  private readonly API = "http://localhost:8080/api/campeonatos-fase";

  constructor(private http: HttpClient) {}

  getFasesPorCampeonato(campeonatoId: number): Observable<Fase[]> {
    return this.http.get<Fase[]>(`${this.API}/campeonato/${campeonatoId}`);
  }

  salvar(novaFase: FaseNova): Observable<Fase> {
    return this.http.post<Fase>(this.API, novaFase);
  }

  deletarPorId(id: number): Observable<any> {
    return this.http.delete<any>(`${this.API}/${id}`);
  }
}
