'use strict';


class Militar {
    constructor (id,nombre,email,activo,nacionalidad,cc,autoridad,genero,edad){
        this.id = id;
        this.nombre=nombre;
        this.email=email;
        this.activo=activo;
        this.nacionalidad=nacionalidad;
        this.cc=cc;
        this.autoridad=autoridad;
        this.genero=genero;
        this.edad=edad;
    
    };
}

module.exports = Militar;