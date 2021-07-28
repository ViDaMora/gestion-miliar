const Unidad = require('../../domain/Unidad/Unidad');
const UnidadSchema = require('../db/mongo/Schemas/Unidad')
const UnidadRepository = require('../../domain/unidad/UnidadRepository');


class UnidadRepositoryMongo extends UnidadRepository{

    constructor(){
        super();
    }
    async save(unidad){
        const {tipoUnidad,encargado,asignada} = unidad
        const mongoUnidad = new UnidadSchema({tipoUnidad,encargado,asignada})
        await mongoUnidad.save()
        return new Unidad(mongoUnidad._id,mongoUnidad.tipoUnidad,mongoUnidad.encargado,mongoUnidad.asignada,mongoUnidad.militares,mongoUnidad.vehiculos)
    }

     async Asignar_Vehiculo(vehiculo,idUnidad){
    
            return UnidadSchema.updateOne({cc:cc},{idUnidad:idUnidad}{vehiculo:vehiculo})
        
    }



}
module.exports = {UnidadRepositoryMongo}