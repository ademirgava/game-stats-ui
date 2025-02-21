import { HttpClient, HttpEvent, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Page } from "../../componentes/models/page";
import { Equipe } from "../../componentes/models/equipe";

@Injectable({
  providedIn: "root",
})
export class EquipesService {
  private readonly API = "http://localhost:8080/api/equipes";

  constructor(private http: HttpClient) {}

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

  salvarLogomarca(equipeId: number, formData: FormData) {
    return this.http.post<Equipe>(
      `${this.API}/add-imagem/${equipeId}`,
      formData
    );
  }

  getLogomarca(equipeId: number): Observable<any> {
    return this.http.get<any>(`${this.API}/image/${equipeId}`);
  }

  upload(equipeId: number, file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append("file", file);

    const req = new HttpRequest(
      "POST",
      `${this.API}/add-imagem/${equipeId}`,
      formData,
      {
        reportProgress: true,
        responseType: "json",
      }
    );

    return this.http.request(req);
  }

  getLogomarcaImage(imagem: any): any {
    return "data:@file;base64," + imagem;
  }
}
