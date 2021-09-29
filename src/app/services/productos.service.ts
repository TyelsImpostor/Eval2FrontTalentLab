import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';
@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  url: string = "assets/data/productos.json";
  producto: Producto[] = [];
  constructor(private http: HttpClient) {
      this.cargarProductos();
  }

  public cargarProductos(){
      this.http.get('assets/data/productos.json').subscribe( (response: Producto | any) => {
      this.producto = response.productos;
      });
  }

  
}
