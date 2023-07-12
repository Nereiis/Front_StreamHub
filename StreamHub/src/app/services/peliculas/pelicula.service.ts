import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PeliculasI } from 'src/app/models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  id: string = "";
  peliculaData: PeliculasI = {
    _id: '',
    Portada: '',
    Nombre: '',
    Trailer: '',
    Duracion: 0,
    Año: 0,
    Genero: [],
    Descripcion: '',
    Valoracion: 0,
    Resena: []
  };

  public db_url : string = 'http://localhost:5000/peliculas';

  constructor(private http: HttpClient) { }

  getPeliculas() {
    return this.http.get(this.db_url);
  }

  getPeliculaById(id:string) {
    return this.http.get(`${this.db_url}/${id}`);
  }

  postPelicula(pelicula:PeliculasI) {
    return this.http.post(this.db_url,pelicula);
  }

  deletePelicula(id:String) {
    return this.http.delete(`${this.db_url}/${id}`);
  }

  putPelicula(id:string, pelicula:PeliculasI) {
    return this.http.put(`${this.db_url}/${id}`, pelicula);
  }

  addReviewToPelicula(idPelicula:string, idReview:string) {
    return this.http.put(`${this.db_url}/addReview/${idPelicula}`, {idReview});
  }

  getOnePelicula() {
    return this.peliculaData;
  }

  getId(){
    return this.peliculaData._id;
  }

  editPelicula(pelicula:PeliculasI) {
    this.peliculaData = pelicula;
    this.id = pelicula._id;
  }

  resetPeliculaData() {
    this.peliculaData = {
      _id: '',
      Portada: '',
      Nombre: '',
      Trailer: '',
      Duracion: 0,
      Año: 0,
      Genero: [],
      Descripcion: '',
      Valoracion: 0,
      Resena: []
    };
  }
}
