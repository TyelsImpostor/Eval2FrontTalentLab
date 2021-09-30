import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.scss']
})
export class PruebasComponent implements OnInit {

  Titulo: string = 'Alerta';
  Detalle: string = 'Esta a paunto de realizar cambios denla prueba';
  Accion: string = 'Guardar producto';
  mensaje: string = "";
  constructor() { }

  ngOnInit(): void {
  }

  procesarMensaje(mensaje: any) {
    this.mensaje =mensaje;
    console.log(mensaje);
  }
}
