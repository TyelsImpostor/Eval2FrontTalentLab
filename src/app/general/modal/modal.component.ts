import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() totalCarrito:any = null;
  mensaje: string = "";
  @Output() accionModal = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  enviarDatos(){
    this.mensaje = 'Enviando mensajeaaaaaaaaa';
    this.accionModal.emit(this.mensaje);
  }
  //FORM=====
  pais: string = "";
  calle: string = "";
  ciudad: string = "";
  region: string = "";
  codigopostal: string = "";
  tipotarjeta: string = "";
  nombre: string = "";
  numerotarjeta: string = "";
  codigo: string = "";
  mesexp: string = "";
  anoexp: string = "";

  //==========

  mensaje_pais: string | null = "";
  mensaje_calle: string | null = "";
  mensaje_ciudad: string | null = "";
  mensaje_region: string | null = "";
  mensaje_codigopostal: string | null = "";
  mensaje_tipotarjeta: string | null = "";
  mensaje_nombre: string | null = "";
  mensaje_numerotarjeta: string | null = "";
  mensaje_codigo: string | null = "";
  mensaje_mesexp: string | null = "";
  mensaje_anoexp: string | null = "";

  //===========
  mensaje_emailF: string | null = "";
  mensaje_nombreF: string | null = "";
  mensaje_numeroF: string | null = "";

  insertar(): void {
    var valido = 0;

    if (/^\s+|\s+$/.test(this.pais)) {
      this.mensaje_pais = "Introduzca un cadena de texto.";
      this.pais = "";
    } else if (this.pais.trim() == "") {
      this.pais = "";
      this.mensaje_pais = " El campo pais no puede  estar vacio";
    } else {
      this.mensaje_pais = "";
      valido++;
    }

    if (/^\s+|\s+$/.test(this.calle)) {
      this.mensaje_calle = "Introduzca un cadena de texto.";
      this.calle = "";
    } else if (this.calle.trim() == "") {
      this.calle = "";
      this.mensaje_calle = " El campo calle no puede  estar vacio";
    } else {
      this.mensaje_calle = "";
      valido++;
    }

    if (/^\s+|\s+$/.test(this.ciudad)) {
      this.mensaje_ciudad = "Introduzca un cadena de texto.";
      this.ciudad = "";
    } else if (this.ciudad.trim() == "") {
      this.ciudad = "";
      this.mensaje_ciudad = " El campo ciudad no puede  estar vacio";
    } else {
      this.mensaje_ciudad = "";
      valido++;
    }
    if (/^\s+|\s+$/.test(this.region)) {
      this.mensaje_region = "Introduzca un cadena de texto.";
      this.region = "";
    } else if (this.region.trim() == "") {
      this.region = "";
      this.mensaje_region = " El campo region no puede  estar vacio";
    } else {
      this.mensaje_region = "";
      valido++;
    }
    if (/^\s+|\s+$/.test(this.codigopostal)) {
      this.mensaje_codigopostal = "Introduzca un cadena de texto.";
      this.codigopostal = "";
    } else if (this.codigopostal.trim() == "") {
      this.codigopostal = "";
      this.mensaje_codigopostal = " El campo codigo postal no puede  estar vacio";
    } else {
      this.mensaje_codigopostal = "";
      valido++;
    }
    if (/^\s+|\s+$/.test(this.tipotarjeta)) {
      this.mensaje_tipotarjeta = "Introduzca un cadena de texto.";
      this.tipotarjeta = "";
    } else if (this.tipotarjeta.trim() == "") {
      this.tipotarjeta = "";
      this.mensaje_tipotarjeta = " El campo tipo de tarjeta no puede  estar vacio";
    } else {
      this.mensaje_tipotarjeta = "";
      valido++;
    }
    if (/^\s+|\s+$/.test(this.nombre)) {
      this.mensaje_nombre = "Introduzca un cadena de texto.";
      this.nombre = "";
    } else if (this.nombre.trim() == "") {
      this.nombre = "";
      this.mensaje_nombre = " El campo nombre no puede  estar vacio";
    } else {
      this.mensaje_nombre = "";
      valido++;
    }
    if (/^\s+|\s+$/.test(this.numerotarjeta)) {
      this.mensaje_numerotarjeta = "Introduzca un cadena de texto.";
      this.numerotarjeta = "";
    } else if (this.numerotarjeta.trim() == "") {
      this.numerotarjeta = "";
      this.mensaje_numerotarjeta = " El campo numero de tarjeta no puede  estar vacio";
    } else {
      this.mensaje_numerotarjeta = "";
      valido++;
    }

    if (/^\s+|\s+$/.test(this.codigo)) {
      this.mensaje_codigo = "Introduzca un cadena de texto.";
      this.codigo = "";
    } else if (this.codigo.trim() == "") {
      this.codigo = "";
      this.mensaje_codigo = " El campo codigo de la tarjeta no puede  estar vacio";
    } else {
      this.mensaje_codigo = "";
      valido++;
    }

    if (/^\s+|\s+$/.test(this.anoexp)) {
      this.mensaje_anoexp = "Introduzca un cadena de texto.";
      this.anoexp = "";
    } else if (this.anoexp.trim() == "") {
      this.anoexp = "";
      this.mensaje_anoexp = " El campo año de expiración no puede  estar vacio";
    } else {
      this.mensaje_anoexp = "";
      valido++;
    }
    if (/^\s+|\s+$/.test(this.mesexp)) {
      this.mensaje_mesexp = "Introduzca un cadena de texto.";
      this.mesexp = "";
    } else if (this.mesexp.trim() == "") {
      this.mesexp = "";
      this.mensaje_mesexp = " El campo mes de expiración no puede  estar vacio";
    } else {
      this.mensaje_mesexp = "";
      valido++;
    }





    var tarjeta = /^[0-9]{15,16}|(([0-9]{4}\s){3}[0-9]{3,4})$/;
    /*
    if(valido==3){
      this.mensaje_nombreF = "Nombre: "+ this.nombre;
      this.mensaje_emailF = "Email: " + this.email;
      this.mensaje_numeroF = "Numero: "+ this.numero;
    }else{
      this.mensaje_nombreF = "";
      this.mensaje_emailF = "";
      this.mensaje_numeroF = "";
    }
    */
  }
}
