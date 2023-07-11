import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ResenasI, UsersI } from 'src/app/models/interfaces';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LibrosService } from 'src/app/services/libros/libros.service';
import { ResenaService } from 'src/app/services/resena/resena.service';

@Component({
  selector: 'app-resena-libro',
  templateUrl: './resena-libro.component.html',
  styleUrls: ['./resena-libro.component.scss']
})
export class ResenaLibroComponent {
  @Input() idLibro!: string;
  resenaForm!: FormGroup;
  submitted: boolean = false;
  resena!: ResenasI;
  value: number = 3;

  constructor(private authService: AuthService, private libroService: LibrosService, private resenaService: ResenaService, private form: FormBuilder, private router: Router) {}

  ngOnInit() : void {
    this.resenaForm = this.form.group({
      Titulo: [this.resena?.Titulo, [Validators.required]],
      Comentario: [this.resena?.Comentario, [Validators.required]],
      Valoracion: [this.resena?.Valoracion, [Validators.required]]
    });

    this.resenaForm.valueChanges.subscribe((data) => {
      this.resena = data;
    })

    console.log(this.idLibro);
  }

  onClick() {
    this.submitted = true;
    this.resena.Username = JSON.parse(String(this.authService.getCurrentUser()));
    if(this.resenaForm.valid) {
      this.resenaService.postResena(this.resena).subscribe((data:any) => {
        this.resenaForm.reset();
        this.submitted = false;
        console.log(data._id);
        this.libroService.addReviewToLibro(this.idLibro, data._id).subscribe((data2:any) => {
          window.location.reload();
        });
      });
    }
  }
}
