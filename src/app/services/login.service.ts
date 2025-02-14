import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../componentes/models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private isAuthenticated = false;
  private authSecretKey = 'Bearer Token';

  private readonly API = 'http://localhost:8080/api/login'

  constructor(private http: HttpClient) {
    this.isAuthenticated = !!localStorage.getItem(this.authSecretKey);
  }

  logar(login: Login): Observable<String> {
    return this.http.post<String>(this.API, login);
  }

  autenticar(token: any) {
    const authToken = token; // Generate or receive the token from your server
    localStorage.setItem(this.authSecretKey, authToken.token);
    this.isAuthenticated = true;
  }

  isAutenticado(): boolean {
    return this.isAuthenticated;
  }

  logout(): void {
    localStorage.removeItem(this.authSecretKey);
    this.isAuthenticated = false;
  }

  getToken(): any {
    return localStorage.getItem(this.authSecretKey);
  }

  refreshAccessToken(): any {
    return null;
  }
}
