import { NgModule } from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import { LoginComponent } from './login/login/login.component';
import { RegistroComponent } from './login/registro/registro.component';
import { ProductosComponent } from './general/productos/productos.component';
import { PruebasComponent } from './general/pruebas/pruebas.component';
import { HomeComponent } from './general/home/home.component';
import { NotfoundComponent } from './general/notfound/notfound.component';
import { EditarProductoComponent } from './general/editar-producto/editar-producto.component';

//referencia a los componentes 
const app_routes: Routes = [
    { path:'', component: HomeComponent},
    { path:'login', component: LoginComponent},
    { path:'registro', component: RegistroComponent },
    { path:'productos', component: ProductosComponent },
    { path: 'errornotfound', component: NotfoundComponent },
    { path: 'editarproducto', component: EditarProductoComponent },
    { path: 'pruebas', component: PruebasComponent},
    { path: '**', redirectTo: 'errornotfound' },

];

//decorador. no olvidar importartlo
@NgModule({
    imports: [RouterModule.forRoot(app_routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }