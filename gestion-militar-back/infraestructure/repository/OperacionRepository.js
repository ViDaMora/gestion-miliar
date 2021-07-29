const Operacion = require('../../domain/Operacion/Operacion');
const OperacionSchema = require('../db/mongo/Schemas/Operacion')
const OperacionRepository = require('../../domain/Operacion/OperacionRepository');

class OperacionRepositoryMongo extends OperacionRepository{

    constructor(){
        super();
    }

    async save(operacion){
        const {unidades,lider,descripcion,pais,nombre} = operacion
        console.log(unidades)
        const mongoOperacion = new OperacionSchema({unidades,lider,descripcion,pais,nombre})
        let operacionCreada= await mongoOperacion.save()
        return new Operacion(operacionCreada._id, operacionCreada.descripcio, operacionCreada.lider, operacionCreada.pais, operacionCreada.nombre)
    
    }

    async asignarUnidad(unidadId,operacionId){
        const operacion = await OperacionSchema.findOne({_id:operacionId})
        console.log(operacion)
        operacion.unidades.push(unidadId)
        
        const operacionUpdate=await operacion.save()
        return {message:"operacion asignada correctamente",operacion:operacionUpdate}

    }

    async findAll(){
        return OperacionSchema.find({})
    }


    
    async findById(operacionId){
        const operacion = await OperacionSchema.findOne({_id:operacionId})
        return new Operacion(operacion.id,operacion.unidades,operacion.lider,operacion.descripcion,operacion.pais,operacion.nombre)
    }

}
module.exports = {OperacionRepositoryMongo}