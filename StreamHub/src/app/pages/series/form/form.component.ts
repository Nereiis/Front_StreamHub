import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SeriesI } from 'src/app/models/interfaces';
import { SeriesService } from 'src/app/services/series/series.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  serieForm! : FormGroup;
  _id! : string;
  serie! : SeriesI;
  submitted: boolean = false;

  genres: Array<any> = [
    { name: 'Anime', value: 'Anime' },
    { name: 'Acción', value: 'Accion' },
    { name: 'Comedia', value: 'Comedia' },
    { name: 'Drama', value: 'Drama' },
    { name: 'Fantasía', value: 'Fantasia' },
    { name: 'Terror', value: 'Terror' },
    { name: 'Romance', value: 'Romance' },
    { name: 'Infantil', value: 'Infantil' }
  ];

  constructor(private service: SeriesService, private form: FormBuilder, private router: Router) {
    this.serie = this.service.getOneSerie();
    this._id = this.service.getId();
  }

  ngOnInit() : void {
    this.serieForm = this.form.group({
      Portada: [this.serie?.Portada, [Validators.required]],
      Nombre: [this.serie?.Nombre, [Validators.required]],
      Trailer: [this.serie?.Trailer, [Validators.required]],
      Descripcion: [this.serie?.Descripcion, [Validators.required]],
      Genero: [this.serie?.Genero],
      Resena: [this.serie?.Resena],
      Valoracion: [this.serie?.Valoracion],
      Capitulos: [this.serie?.Capitulos],
    });

    this.serieForm.valueChanges.subscribe((data) => {
      this.serie = data;
    })
  }

  onCheckboxChange(event: any) {
    if (event.target.checked) {
      this.serie.Genero.push(event.target.value);
    } else  {
      const index = this.serie.Genero.indexOf(event.target.value);
      if (index > -1) {
        this.serie.Genero.splice(index, 1);
      }
    }
  }

  onClick() {
    this.submitted = true;
    if(this.serieForm.valid) {
      if(this._id === "") {
        // ADD SERIE
        this.service.postSerie(this.serie).subscribe((data) => {
          this.serieForm.reset();
          this.submitted = false;
          this.router.navigate(['/series']);
        });
      } else {
        // EDIT SERIE
        this.service.putSerie(this._id,this.serie).subscribe((data) => {
          this.serieForm.reset();
          this.submitted = false;
          this.router.navigate(['/series']);
        });
      }
      
    }
  }

  ngOnDestroy() : void {
    this.submitted = false;
    this.service.resetSerieData();
    this._id = "";
  }
}
