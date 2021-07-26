
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
}
module.exports = {VehiculoRepositoryMongo}