const Unidad = require('../../domain/Unidad/Unidad');
const UnidadSchema = require('../db/mongo/Schemas/Unidad')
const UnidadRepository = require('../../domain/Unidad/UnidadRepository');
const MilitarEschema = require('../db/mongo/Schemas/Militar');

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


     async asignarVehiculo(vehiculo,idUnidad){
        const unidad = await UnidadSchema.findOne({_id:idUnidad})
        unidad.vehiculos.push(vehiculo)
        const unidadUpdate=  await unidad.save()
       return {message:"Vehiculo asignado a la unidad",unidad:unidadUpdate}
    
    }


    async asignarMilitar(unidadId,militar){
        const unidad = await UnidadSchema.findOne({_id:unidadId})
        unidad.militares.push(militar)
        const unidadUpdate=  await unidad.save()
       return {message:"Militar asignado correctamente",unidad:unidadUpdate}

    }

    
    async findById(unidadId){
        const unidad = await UnidadSchema.findOne({_id:unidadId})
        return new Unidad(unidad._id,unidad.tipoUnidad,unidad.encargado,unidad.asignada,unidad.militares,unidad.vehiculos)
    }


    async findAll(){
        const unidades = await UnidadSchema.find({})
        return unidades.map(unidad => new Unidad(unidad._id,unidad.tipoUnidad,unidad.encargado,unidad.asignada,unidad.militares,unidad.vehiculos))
    }

}
module.exports = {UnidadRepositoryMongo}