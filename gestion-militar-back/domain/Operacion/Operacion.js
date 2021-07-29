'use strict';


class Operacion {
    constructor (id,unidades,lider,descripcion,pais,nombre){
    this.id = id;
    this.unidades = unidades;
    this.lider = lider;
    this.descripcion = descripcion;
    this.pais = pais;
    this.activa = false;
    this.nombre = nombre;
    };
}

module.exports = Operacion;