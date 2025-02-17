import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoginService } from "../login.service";
import { Observable } from "rxjs";
import { Page } from "../../componentes/models/page";
import { Equipe } from "../../componentes/models/equipe";

@Injectable({
  providedIn: "root",
})
export class EquipesService {
  private readonly API = "http://localhost:8080/api/equipes";

  constructor(private http: HttpClient, private loginService: LoginService) {}

  obterTodasEquipes(): Observable<Page> {
    return this.http.get<Page>(this.API);
  }

  buscarPorEquipeId(id: number): Observable<Equipe> {
    return this.http.get<Equipe>(`${this.API}/${id}`);
  }

  editarOuSalvarEquipe(novaEquipe: Equipe) {
    if (novaEquipe.id) {
      return this.editarEquipe(novaEquipe);
    } else {
      return this.salvarEquipe(novaEquipe);
    }
  }

  editarEquipe(equipe: Equipe) {
    return this.http.put<Equipe>(this.API, equipe);
  }

  salvarEquipe(novaEquipe: Equipe) {
    return this.http.post<Equipe>(this.API, novaEquipe);
  }
}
