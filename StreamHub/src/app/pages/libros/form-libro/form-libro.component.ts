import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LibrosI } from 'src/app/models/interfaces';
import { LibrosService } from 'src/app/services/libros/libros.service';

@Component({
  selector: 'app-form',
  templateUrl: './form-libro.component.html',
  styleUrls: ['./form-libro.component.scss']
})
export class FormLibroComponent {
  libroForm! : FormGroup;
  _id! : string;
  libro! : LibrosI;
  submitted: boolean = false;

  constructor(private service: LibrosService, private form: FormBuilder, private router: Router) {
    this.libro = this.service.getOneLibro();
    this._id = this.service.getId();
  }

  ngOnInit() : void {
    this.libroForm = this.form.group({
      Portada: [this.libro?.Portada, [Validators.required]],
      Nombre: [this.libro?.Nombre, [Validators.required]],
      Autor: [this.libro?.Autor, [Validators.required]],
      Descripcion: [this.libro?.Descripcion, [Validators.required]],
      Genero: [this.libro.Genero, [Validators.required]],
      Resena: [this.libro?.Resena],
      Valoracion: [this.libro?.Valoracion],
    });

    this.libroForm.valueChanges.subscribe((data) => {
      this.libro = data;
    })
  }
  
  onClick() {
    this.submitted = true;
    if(this.libroForm.valid) {
      if(this._id === "") {
        // ADD LIBRO
        this.service.postLibro(this.libro).subscribe((data) => {
          this.libroForm.reset();
          this.submitted = false;
          this.router.navigate(['/libros']);
        });
      } else {
        // EDIT LIBRO
        this.service.putLibro(this._id,this.libro).subscribe((data) => {
          this.libroForm.reset();
          this.submitted = false;
          this.router.navigate(['/libros']);
        });
      }
    }
  }

  ngOnDestroy() : void {
    this.submitted = false;
    this.service.resetLibroData();
    this._id = "";
  }
}

