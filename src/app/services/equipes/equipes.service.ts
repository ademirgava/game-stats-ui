import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from '../login.service';
import { Observable } from 'rxjs';
import { Page } from '../../componentes/models/page';

@Injectable({
  providedIn: 'root'
})
export class EquipesService {

  private readonly API = 'http://localhost:8080/api/equipes'
  
  constructor(private http: HttpClient, private loginService: LoginService) {}
  
  obterTodasEquipes(): Observable<Page> {
    return this.http.get<Page>(this.API);
  }
}
