
const Vehiculo = require('../../../domain/Vehiculo/Vehiculo')

async function Obtener_Vehiculos(vehiculoRepository){
    let vehiculos = await vehiculoRepository.findAll()
    return vehiculos.map(vehiculo => new Vehiculo(vehiculo._id,vehiculo.tipoVehiculo,vehiculo.url))
}


module.exports = {Obtener_Vehiculos}