import { Component } from '@angular/core';
import { CategoriaService } from './services/categoria.service';
import { ProductosService } from './services/productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'eval1talentlab';
  constructor(public categoriaService: CategoriaService, public productosService: ProductosService) {
    console.log("aPP component");
  }
}
