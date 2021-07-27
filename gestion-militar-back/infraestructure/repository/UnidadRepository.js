const Unidad = require('../../domain/Unidad/Unidad');
const UnidadSchema = require('../db/mongo/Schemas/Unidad')
const UnidadRepository = require('../../domain/unidad/UnidadRepository');


class UnidadRepositoryMongo extends UnidadRepository{

    constructor(){
        super();
    }
    async save(unidad){
        const {tipoUnidad,encargado,asignada,militares,vehiculos} = unidad
        const mongoUnidad = new UnidadSchema({id,tipoUnidad,encargado,asignada,militares,vehiculos})
        let res =await mongoUnidad.save()

        return new Unidad(mongoUnidad._id,mongoUnidad.tipoUnidad,mongoUnidad.encargado,mongoUnidad.asignada,mongoUnidad.militares,mongoUnidad.vehiculos)
    }


   

}
module.exports = {UnidadRepositoryMongo}