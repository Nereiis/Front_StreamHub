import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CheckSessionComponent } from './pages/check-session/check-session.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SeriesComponent } from './pages/series/series.component';
import { PeliculasComponent } from './pages/peliculas/peliculas.component';
import { LibrosComponent } from './pages/libros/libros.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DetailLibroComponent } from './pages/libros/detail-libro/detail-libro.component';
import { FormLibroComponent } from './pages/libros/form-libro/form-libro.component';
import { EditLibroComponent } from './pages/libros/edit-libro/edit-libro.component';
import { DetailPeliculaComponent } from './pages/peliculas/detail-pelicula/detail-pelicula.component';
import { FormPeliculaComponent } from './pages/peliculas/form-pelicula/form-pelicula.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CheckSessionComponent,
    NavbarComponent,
    FooterComponent,
    SeriesComponent,
    PeliculasComponent,
    LibrosComponent,
    PerfilComponent,
    LoginComponent,
    RegisterComponent,
    DetailLibroComponent,
    FormLibroComponent,
    EditLibroComponent
    DetailPeliculaComponent,
    FormPeliculaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
