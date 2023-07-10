import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LibrosComponent } from './pages/libros/libros.component';
import { FormLibroComponent } from './pages/libros/form-libro/form-libro.component';
import { DetailLibroComponent } from './pages/libros/detail-libro/detail-libro.component';
import { EditLibroComponent } from './pages/libros/edit-libro/edit-libro.component';
import { PeliculasComponent } from './pages/peliculas/peliculas.component';
import { FormPeliculaComponent } from './pages/peliculas/form-pelicula/form-pelicula.component'; 
import { DetailPeliculaComponent } from './pages/peliculas/detail-pelicula/detail-pelicula.component';
import { SeriesComponent } from './pages/series/series.component';
import { DetailSerieComponent } from './pages/series/detail-serie/detail-serie.component';
import { FormComponent } from './pages/series/form/form.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'libros', component: LibrosComponent, canActivate:[authGuard]},
  { path: 'gestionLibros', component: FormLibroComponent },
  { path: 'libros/:id', component: DetailLibroComponent },
  { path: 'editarLibro', component: EditLibroComponent },
  { path: 'peliculas', component: PeliculasComponent, canActivate:[authGuard] },
  { path: 'gestionPeliculas', component: FormPeliculaComponent },
  { path: 'peliculas/:id', component: DetailPeliculaComponent },
  { path: 'series', component: SeriesComponent, canActivate:[authGuard] },
  { path: 'gestionSeries', component: FormComponent, canActivate:[authGuard] },
  { path: 'series/:id', component: DetailSerieComponent, canActivate:[authGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }