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
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { DetailSerieComponent } from './pages/series/detail-serie/detail-serie.component';
import { FormComponent } from './pages/series/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PreviewSerieComponent } from './pages/series/form/preview-serie/preview-serie.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { DetailLibroComponent } from './pages/libros/detail-libro/detail-libro.component';
import { FormLibroComponent } from './pages/libros/form-libro/form-libro.component';
import { EditLibroComponent } from './pages/libros/edit-libro/edit-libro.component';
import { DetailPeliculaComponent } from './pages/peliculas/detail-pelicula/detail-pelicula.component';
import { FormPeliculaComponent } from './pages/peliculas/form-pelicula/form-pelicula.component';
import { PreviewPeliculaComponent } from './pages/peliculas/form-pelicula/preview-pelicula/preview-pelicula.component';
import { ResenaPeliculaComponent } from './pages/peliculas/detail-pelicula/resena-pelicula/resena-pelicula.component';


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
    DetailSerieComponent,
    FormComponent,
    PreviewSerieComponent,
    DetailLibroComponent,
    FormLibroComponent,
    EditLibroComponent,
    DetailPeliculaComponent,
    FormPeliculaComponent,
    PreviewPeliculaComponent,
    ResenaPeliculaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
