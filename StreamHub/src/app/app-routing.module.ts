import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LibrosComponent } from './pages/libros/libros.component';
import { PeliculasComponent } from './pages/peliculas/peliculas.component';
import { SeriesComponent } from './pages/series/series.component';
import { DetailSerieComponent } from './pages/series/detail-serie/detail-serie.component';
import { FormComponent } from './pages/series/form/form.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'libros', component: LibrosComponent },
  { path: 'peliculas', component: PeliculasComponent },

  { path: 'series', component: SeriesComponent },
  { path: 'gestionSeries', component: FormComponent },
  { path: 'series/:id', component: DetailSerieComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
