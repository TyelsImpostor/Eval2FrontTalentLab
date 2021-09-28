import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './compartida/navbar/navbar.component';
import { FooterComponent } from './compartida/footer/footer.component';
import { LoginComponent } from './general/login/login.component';
import { RegistroComponent } from './general/registro/registro.component';
import { ProductosComponent } from './general/productos/productos.component';
import { BuscarPorCategoriaComponent } from './compartida/buscar-por-categoria/buscar-por-categoria.component';
import { HomeComponent } from './general/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { NotfoundComponent } from './general/notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    RegistroComponent,
    ProductosComponent,
    BuscarPorCategoriaComponent,
    HomeComponent,
    NotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
