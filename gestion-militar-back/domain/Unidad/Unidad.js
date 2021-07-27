'use strict';

class Unidad {
    constructor (id,unidadId,lider,descripcion,pais,nombre){
    this.id = id;
    this.unidadId = unidadId;
    this.lider = lider;
    this.descripcion = descripcion;
    this.pais = pais;
    this.activa = false;
    this.nombre = nombre;
    };
}

module.exports = Unidad;