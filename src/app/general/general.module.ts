import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ProductosComponent } from './productos/productos.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PruebasComponent } from './pruebas/pruebas.component';
import { ModalComponent } from './modal/modal.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        ProductosComponent,
        NotfoundComponent,
        PruebasComponent,
        ModalComponent,
    ],
    exports: [
        ProductosComponent,
        NotfoundComponent,
        PruebasComponent,
        ModalComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
    ],

})
export class GeneralModule { }