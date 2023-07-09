import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LibrosComponent } from './pages/libros/libros.component';
import { PeliculasComponent } from './pages/peliculas/peliculas.component';
import { SeriesComponent } from './pages/series/series.component';
import { FormPeliculaComponent } from './pages/peliculas/form-pelicula/form-pelicula.component'; 
import { DetailPeliculaComponent } from './pages/peliculas/detail-pelicula/detail-pelicula.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'libros', component: LibrosComponent },
  { path: 'peliculas', component: PeliculasComponent },
  { path: 'gestionPeliculas', component: FormPeliculaComponent },
  { path: 'peliculas/:id', component: DetailPeliculaComponent },
  { path: 'series', component: SeriesComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }