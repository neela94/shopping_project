import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoginServiceService {
  loginUrl = ' http://localhost:3000/login-user';
  constructor(private http: HttpClient) {}

  getLogin() {
    return this.http.get(this.loginUrl);
  }
}
