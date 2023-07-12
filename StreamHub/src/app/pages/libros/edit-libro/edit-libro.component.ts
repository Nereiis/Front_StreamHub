import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LibrosI } from 'src/app/models/interfaces';
import { LibrosService } from 'src/app/services/libros/libros.service';


@Component({
  selector: 'app-edit-libro',
  templateUrl: './edit-libro.component.html',
  styleUrls: ['./edit-libro.component.scss']
})
export class EditLibroComponent implements OnInit{

  id!: string;
  libro!: LibrosI;
  submitted: boolean = false;
  libroForm!: FormGroup;

  constructor (private libroApi: LibrosService, private form: FormBuilder, private router:Router ){
    this.libro = this.libroApi.getOneLibro();
    this.id = this.libroApi.getId();
  }

  ngOnInit(): void {
    this.libroForm = this.form.group({
      Portada: [this.libro.Portada, [Validators.required]],
      Nombre: [this.libro.Nombre, [Validators.required]],
      Autor: [this.libro.Autor, [Validators.required]],
      Genero: [this.libro.Genero, [Validators.required]],
      Descripcion: [this.libro.Descripcion, [Validators.required]],
    })
    this.libroForm.valueChanges.subscribe((data) => {
      this.libro = data;
    })
  }

  editLibro(){
    this.submitted = true;
    if(this.libroForm.valid){
      this.libroApi.putLibro(this.id, this.libro,).subscribe((data) =>{
        this.libroForm.reset();
        this.submitted = false;
        this.router.navigate(["/libros"]);
      })
    };
  }

  ngOnDestroy() : void {
    this.submitted = false;
    this.libroApi.resetLibroData();
    this.id = "";
  }


}
