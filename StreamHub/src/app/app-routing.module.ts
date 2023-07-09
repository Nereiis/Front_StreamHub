import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LibrosComponent } from './pages/libros/libros.component';
import { FormLibroComponent } from './pages/libros/form-libro/form-libro.component';
import { DetailLibroComponent } from './pages/libros/detail-libro/detail-libro.component';
import { PeliculasComponent } from './pages/peliculas/peliculas.component';
import { SeriesComponent } from './pages/series/series.component';
import { EditLibroComponent } from './pages/libros/edit-libro/edit-libro.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'libros', component: LibrosComponent },
  { path: 'gestionLibros', component: FormLibroComponent },
  { path: 'libros/:id', component: DetailLibroComponent },
  { path: 'editarLibro', component: EditLibroComponent },
  { path: 'peliculas', component: PeliculasComponent },
  { path: 'series', component: SeriesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
