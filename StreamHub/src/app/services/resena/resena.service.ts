import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResenasI } from 'src/app/models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ResenaService {

  public db_url : string = 'http://localhost:5000/resenas';

  constructor(private http: HttpClient) { }

  getResenaById(id:string) {
    return this.http.get(`${this.db_url}/${id}`);
  }

  postResena(resena:ResenasI) {
    return this.http.post(this.db_url,resena);
  }
}
