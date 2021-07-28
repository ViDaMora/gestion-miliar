
const Vehiculo = require('../../domain/Vehiculo/Vehiculo');
const VehiculoSchema = require('../db/mongo/Schemas/Vehiculo')
const VehiculoRepository = require('../../domain/Vehiculo/VehiculoRepository');


class VehiculoRepositoryMongo extends VehiculoRepository{

    constructor(){
        super();
    }
    async save(vehiculo){
        const {tipoVehiculo, url} = vehiculo
        
        const mongoVehiculo = new VehiculoSchema({tipoVehiculo, url})
        await mongoVehiculo.save()
        return new Vehiculo(mongoVehiculo._id,mongoVehiculo.tipoVehiculo,mongoVehiculo.url)
    }

    async delete(id){
        
        return VehiculoSchema.deleteOne({_id:id})   
        
    }

    async findById(id){
        return VehiculoSchema.findOne({_id:id})
    }

<<<<<<< HEAD
   
=======
    async findAll(){
        return VehiculoSchema.find({})
    }

>>>>>>> 7bf6e620b6947f879947acf61d8a6c1a535eedd6
}
module.exports = {VehiculoRepositoryMongo}