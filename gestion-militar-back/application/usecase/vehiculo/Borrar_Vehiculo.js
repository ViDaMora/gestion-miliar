const Vehiculo = require('../../../domain/Vehiculo/Vehiculo')

function borrarVehiculo(id,VehiculoRepository){
    let vehiculo=VehiculoRepository.findById(id)
    if(!vehiculo){
        return {errorMessage:"Vehiculo no Encontrado"}
    }
    VehiculoRepository.delete(id)
}
module.exports={borrarVehiculo}