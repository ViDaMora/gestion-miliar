'use strict';


class Lider {
    constructor (id,nombre,nacionalidad,cc,autoridad,genero,edad,activo){
        this.id = id;
        this.nombre=nombre;
        this.nacionalidad=nacionalidad;
        this.cc=cc;
        this.activo=activo;
        this.autoridad=autoridad;
        this.genero=genero;
        this.edad=edad;
    };
}

module.exports = Lider;