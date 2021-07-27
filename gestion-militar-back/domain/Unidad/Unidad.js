'use strict';

class Unidad {
    constructor (id,tipoUnidad,encargado,asignada,militares,vehiculos){
    this.id = id;
    this.tipoUnidad=tipoUnidad;
    this.encargado=encargado;
    this.asignada=asignada;
    this.militares=militares;
    this.vehiculos=vehiculos;
    };
}

module.exports = Unidad;