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
import { TarifasComponent } from './pages/tarifas/tarifas.component';
import { PreviewPeliculaComponent } from './pages/peliculas/form-pelicula/preview-pelicula/preview-pelicula.component';
import { ResenaPeliculaComponent } from './pages/peliculas/detail-pelicula/resena-pelicula/resena-pelicula.component';
import { FavoritosComponent } from './pages/peliculas/detail-pelicula/favoritos/favoritos.component';
import { ResenaLibroComponent } from './pages/libros/detail-libro/resena-libro/resena-libro.component';
import { ResenaSerieComponent } from './pages/series/detail-serie/resena-serie/resena-serie.component';
import { RatingModule } from 'primeng/rating';
import { PaymentComponent } from './pages/payment/payment.component';
import { ResponseComponent } from './pages/payment/response/response.component';
import { NewsComponent } from './pages/news/news.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';


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
    ResenaPeliculaComponent,
    PreviewPeliculaComponent,
    TarifasComponent,
    FavoritosComponent,
    ResenaLibroComponent,
    ResenaSerieComponent,
    PaymentComponent,
    ResponseComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RatingModule,
    CardModule,
    ButtonModule
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
