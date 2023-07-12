import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PeliculasI } from 'src/app/models/interfaces';
import { PeliculasService } from 'src/app/services/peliculas/pelicula.service'; 

@Component({
  selector: 'app-form',
  templateUrl: './form-pelicula.component.html',
  styleUrls: ['./form-pelicula.component.scss']
})
export class FormPeliculaComponent {
  peliculaForm! : FormGroup;
  _id! : string;
  pelicula! : PeliculasI;
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

  constructor(private service: PeliculasService, private form: FormBuilder, private router: Router) {
    this.pelicula = this.service.getOnePelicula();
    this._id = this.service.getId();
  }

  ngOnInit() : void {
    this.peliculaForm = this.form.group({
      Portada: [this.pelicula?.Portada, [Validators.required]],
      Nombre: [this.pelicula?.Nombre, [Validators.required]],
      Duracion: [this.pelicula?.Duracion],
      Año: [this.pelicula?.Año],
      Trailer: [this.pelicula?.Trailer, [Validators.required]],
      Descripcion: [this.pelicula?.Descripcion, [Validators.required]],
      Genero: [this.pelicula?.Genero],
      Resena: [this.pelicula?.Resena],
      Valoracion: [this.pelicula?.Valoracion],
    });

    this.peliculaForm.valueChanges.subscribe((data) => {
      this.pelicula = data;
    })
    console.log(this._id);
  }

  onCheckboxChange(event: any) {
    if (event.target.checked) {
      this.pelicula.Genero.push(event.target.value);
    } else  {
      const index = this.pelicula.Genero.indexOf(event.target.value);
      if (index > -1) {
        this.pelicula.Genero.splice(index, 1);
      }
    }
    //console.log(this.pelicula.Genero);
  }

  onClick() {
    this.submitted = true;
    if(this.peliculaForm.valid) {
      if(this._id !== "") {
        // EDIT PELICULA
        this.service.putPelicula(this._id,this.pelicula).subscribe((data) => {
          this.peliculaForm.reset()
          this.submitted = false;
          this.router.navigate(["/peliculas"]) 
        })
      } else {
        // ADD PELICULA
        this.service.postPelicula(this.pelicula).subscribe((data) => {
          this.peliculaForm.reset()
          this.submitted = false;
          this.router.navigate(["/peliculas"]) 
        })
      }
    }
  }

  ngOnDestroy() : void {
    this.submitted = false;
    this.service.resetPeliculaData();
    this._id = "";
  }
}
