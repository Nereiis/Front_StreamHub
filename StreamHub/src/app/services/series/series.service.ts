import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SeriesI } from '../../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  id: String = "";
  serieData: SeriesI = {
    _id: '',
    Portada: '',
    Nombre: '',
    Trailer: '',
    Genero: [],
    Descripcion: '',
    Capitulos: [],
    Valoracion: 0,
    Reseña: []
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

  getOneSerie() {
    return this.serieData;
  }

  getId(){
    return this.id;
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
      Reseña: []
    };
  }
}
