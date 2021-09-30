import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto.interface';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ProductosService } from 'src/app/services/productos.service';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  constructor(public categoriaService: CategoriaService, public productosService: ProductosService) { 
  }

  ngOnInit(): void {
  }
  productosCarrito: Producto[] = [];
  @Input() totalCarrito: number|any = 0;
  mensajeCompra: string = "";

  
  eliminarProducto(idProducto: string| any){
    //ELIMINA PRODUCTO DE LA API
    this.productosService.producto = this.productosService.producto.filter( producto => producto.id != idProducto);
  }

  agregarProducto(idProducto: string| any){
    var found = this.productosService.producto.find(producto => producto.id == idProducto);    
    if(found){
      if( found.stock == undefined || found.stock == 0 ){
        //SI NO HAY STOCK NO SUMA
        console.log("No hay mas stock");
      }else {
        //LE RESTA AL STOCK DE LA API
        this.productosService.producto.forEach((producto) => {
          if (producto.id == idProducto) {
            producto.stock = producto.stock - 1; 
          }
        });
        //SI NO ESTA AGREGADO EL PRODUCTO, LO AGREGA CON CANTIDAD 1 AL CARRITO
        if(!this.productosCarrito.some(producto => producto.id == idProducto)){
          found= {
            id: found.id,
            nombre: found.nombre,
            descripcion: found.descripcion,
            precio: found.precio,
            imagen: found.imagen,
            stock: 1    
          }
          this.productosCarrito.push(found);
        } else {
          //SI ES QUE ESTA EN EL CARRITO LE SUMA 1 A LA CANTIDA DEL CARRO
          this.productosCarrito.forEach((producto) => {
            if (producto.id == idProducto) {
              producto.stock = producto.stock +1 ;
            }
          });
        }
        // CALCULA TOTAL CARRITO
        this.totalCarrito = 0;
        this.productosCarrito.forEach(producto => this.totalCarrito += producto.precio*producto.stock);
      }
    }
  }

  quitarProducto(idProducto: string| any){
    var found = this.productosCarrito.find(producto => producto.id == idProducto);
    if(found){
      //LE SUMA AL STOCK DE LA API
      this.productosService.producto.forEach((producto) => {
        if (producto.id == idProducto) {
          producto.stock = producto.stock + 1; 
        }
      });
      if(found.stock == 1){
        //SI SOLO QUEDA 1  SE HACE UN POP
        this.productosCarrito.forEach((producto, index) => {
          if (producto.id == idProducto) {
            this.productosCarrito.splice(index);
          }
        });
      } else {
          //SI STOCK ES MAYOR DE 1 SOLO SE LE RESTA
          this.productosCarrito.forEach((producto) => {
            if (producto.id == idProducto) {
              producto.stock = producto.stock - 1; 
            }
          });
      }
    }
    // CALCULA TOTAL CARRITO
    this.totalCarrito = 0;
    this.productosCarrito.forEach(producto => this.totalCarrito += producto.precio*producto.stock);
  }
  realizarCompra(){
    if(this.productosCarrito.length > 0 ){
      this.mensajeCompra = "Gracias por comprar! Tu total a pagar es: $" + this.totalCarrito;
    }else{
      this.mensajeCompra = "Tu Carrito esta vacio!";
    }
  }


}

