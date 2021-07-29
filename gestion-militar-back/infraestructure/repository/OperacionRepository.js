const Operacion = require('../../domain/Operacion/Operacion');
const OperacionSchema = require('../db/mongo/Schemas/Operacion')
const OperacionRepository = require('../../domain/Operacion/OperacionRepository');

class OperacionRepositoryMongo extends OperacionRepository{

    constructor(){
        super();
    }

    async save(operacion){
        const {unidades,lider,descripcion,pais,nombre} = operacion
        const mongoOperacion = new OperacionSchema({unidades,lider,descripcion,pais,nombre})
        let operacionCreada= await mongoOperacion.save()
        return new Operacion(operacionCreada._id, operacionCreada.descripcio, operacionCreada.lider, operacionCreada.pais, operacionCreada.nombre)
    
    }

    async asignarUnidad(operacionId,unidad){
        const operacion = await OperacionSchema.findOne({_id:operacionId})
        operacion.unidades.push(unidad)
        const operacionUpdate=await operacion.save()
        return {message:"operacion asignada correctamente",operacion:operacionUpdate}

    }

    async findAll(){
        return OperacionSchema.find({})
    }

}
module.exports = {OperacionRepositoryMongo}