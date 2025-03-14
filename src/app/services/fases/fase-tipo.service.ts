import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CampeonatoFaseTipo } from "../../componentes/models/campeonatoFaseTipo";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class FaseTipoService {
  private readonly API = "http://localhost:8080/api/campeonato-fase-tipo";

  constructor(private http: HttpClient) {}

  obterTodosOsTipo(): Observable<CampeonatoFaseTipo[]> {
    return this.http.get<CampeonatoFaseTipo[]>(this.API);
  }
}
