import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsersI } from 'src/app/models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  db_url: string = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  register(user: UsersI) {
    return this.http.post(`${this.db_url}/users/register`, user);
  }

  login(user: UsersI) {
    return this.http.post(`${this.db_url}/users/login`, user);
  }

  logout() {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
  }

  getToken(){
    // return localStorage.getItem('token');
    return sessionStorage.getItem('token');
  }

  getRole(){
    let user = JSON.parse(String(sessionStorage.getItem('user')));
    return user?.role;
  }
}
