import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authSecretKey = 'Bearer Token';

  constructor() { }

  getAuthToken(): any{
    return localStorage.getItem(this.authSecretKey);
  }
}
