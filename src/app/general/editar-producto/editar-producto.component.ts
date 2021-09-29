import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import { ProductosComponent } from 'src/app/general/productos/productos.component';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.scss']
})
export class EditarProductoComponent implements OnInit {

  constructor(public productosComponent: ProductosComponent) { }

  ngOnInit(): void {
  }

}
