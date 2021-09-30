import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './compartida/navbar/navbar.component';
import { FooterComponent } from './compartida/footer/footer.component';
import { LoginComponent } from './login/login/login.component';
import { RegistroComponent } from './login/registro/registro.component';
//import { ProductosComponent } from './general/productos/productos.component';
import { BuscarPorCategoriaComponent } from './compartida/buscar-por-categoria/buscar-por-categoria.component';
import { HomeComponent } from './general/home/home.component';
import { AppRoutingModule } from './app-routing.module';
//import { NotfoundComponent } from './general/notfound/notfound.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EditarProductoComponent } from './general/editar-producto/editar-producto.component';
import { GeneralModule } from './general/general.module';
//import { ProductosComponent, NotfoundComponent} from './general/general.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    BuscarPorCategoriaComponent,
    HomeComponent,
    EditarProductoComponent,
    //ProductosComponent,
    //NotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    GeneralModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
