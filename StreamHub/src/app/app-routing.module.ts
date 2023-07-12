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
import { TarifasComponent } from './pages/tarifas/tarifas.component';
import { CheckSessionComponent } from './pages/check-session/check-session.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { ResponseComponent } from './pages/payment/response/response.component';

import { NewsComponent } from './pages/news/news.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: CheckSessionComponent, canActivate: [authGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'libros', component: LibrosComponent, canActivate:[authGuard]},
  { path: 'gestionLibros', component: FormLibroComponent, canActivate:[authGuard] },
  { path: 'libros/:id', component: DetailLibroComponent, canActivate:[authGuard] },
  { path: 'editarLibro', component: EditLibroComponent, canActivate:[authGuard] },
  { path: 'peliculas', component: PeliculasComponent, canActivate:[authGuard] },
  { path: 'gestionPeliculas', component: FormPeliculaComponent, canActivate:[authGuard] },
  { path: 'peliculas/:id', component: DetailPeliculaComponent, canActivate:[authGuard] },
  { path: 'series', component: SeriesComponent, canActivate:[authGuard] },
  { path: 'gestionSeries', component: FormComponent, canActivate:[authGuard] },
  { path: 'series/:id', component: DetailSerieComponent, canActivate:[authGuard] },
  { path: 'tarifas', component: TarifasComponent},
  { path: 'payment', component: PaymentComponent},
  { path: 'response', component: ResponseComponent},
  { path: 'news', component: NewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }