import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LibrosI } from '../../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  id: string = "";
  libroData: LibrosI = {
    _id: '',
    Portada: '',
    Nombre: '',
    Autor: '',
    Genero: [],
    Descripcion: '',
    Valoracion: 0,
    Resena: []
  };

  public db_url : string = 'http://localhost:5000/libros';


  constructor(private http: HttpClient) { }

  getLibros() {
    return this.http.get(this.db_url);
  }

  getLibroById(id:string) {
    return this.http.get(`${this.db_url}/${id}`);
  }

  postLibro(libro:LibrosI) {
    return this.http.post(this.db_url,libro);
  }

  deleteLibro(id:String) {
    return this.http.delete(`${this.db_url}/${id}`);
  }

  putLibro(id:string, libro:LibrosI) {
    return this.http.put(`${this.db_url}/${id}`, libro);
  }

  addReviewToLibro(idLibro:string, idReview:string) {
    return this.http.put(`${this.db_url}/addReview/${idLibro}`, {idReview});
  }

  getOneLibro() {
    return this.libroData;
  }

  getId(){
    return this.libroData._id;
  }

  editLibro(libro:LibrosI) {
    this.libroData = libro;
    this.id = libro._id;
  }

  resetLibroData() {
    this.libroData = {
      _id: '',
      Portada: '',
      Nombre: '',
      Autor: '',
      Genero: [],
      Descripcion: '',
      Valoracion: 0,
      Resena: []
    };
  }
}
