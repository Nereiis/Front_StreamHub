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

  getCurrentUser() {
    return sessionStorage.getItem('user');
  }

  getUserById(id:string){
    return this.http.get(`${this.db_url}/users/${id}`);
  }

  getRole(){
    let user = JSON.parse(String(sessionStorage.getItem('user')));
    return user?.Role;
  }

  addPeliculaFavorita(id: string, idPelicula: string){
    return this.http.put(`${this.db_url}/addPelicula/${id}`, {idPelicula})
  }

  addLibroFavorito(id: string, idLibro: string){
    return this.http.put(`${this.db_url}/addLibro/${id}`, {idLibro})
  }

  addSerieFavorita(id: string, idSerie: string){
    return this.http.put(`${this.db_url}/addSerie/${id}`, {idSerie})
  }
}
