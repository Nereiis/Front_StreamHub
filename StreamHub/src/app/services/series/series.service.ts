import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SeriesI } from '../../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  id: string = "";
  serieData: SeriesI = {
    _id: '',
    Portada: '',
    Nombre: '',
    Trailer: '',
    Genero: [],
    Descripcion: '',
    Capitulos: [],
    Valoracion: 0,
    Resena: []
  };

  public db_url : string = 'http://localhost:5000/series';

  constructor(private http: HttpClient) { }

  getSeries() {
    return this.http.get(this.db_url);
  }

  getSerieById(id:string) {
    return this.http.get(`${this.db_url}/${id}`);
  }

  postSerie(serie:SeriesI) {
    return this.http.post(this.db_url,serie);
  }

  deleteSerie(id:String) {
    return this.http.delete(`${this.db_url}/${id}`);
  }

  putSerie(id:string, serie:SeriesI) {
    return this.http.put(`${this.db_url}/${id}`, serie);
  }

  addReviewToSerie(idSerie:string, idReview:string) {
    return this.http.put(`${this.db_url}/addReview/${idSerie}`, {idReview});
  }

  getOneSerie() {
    return this.serieData;
  }

  getId(){
    return this.serieData._id;
  }

  editSerie(serie:SeriesI) {
    this.serieData = serie;
    this.id = serie._id;
  }

  resetSerieData() {
    this.serieData = {
      _id: '',
      Portada: '',
      Nombre: '',
      Trailer: '',
      Genero: [],
      Descripcion: '',
      Capitulos: [],
      Valoracion: 0,
      Resena: []
    };
  }
}
