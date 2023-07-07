import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SeriesI } from '../../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  public db_url : string = 'http://localhost:5000/series';

  constructor(private http: HttpClient) { }

  getSeries() {
    return this.http.get(this.db_url);
  }

  getSerieById(id:string) {
    return this.http.get(`${this.db_url}/${id}`);
  }
}
