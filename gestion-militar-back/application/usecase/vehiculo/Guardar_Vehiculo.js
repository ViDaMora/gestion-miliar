
const Vehiculo = require('../../../domain/Vehiculo/Vehiculo')

async function CreateVehiculo(tipoVehiculo,url,vehiculoRepository){
    //AQUI SE VALIDA Y LOGICA DE NEGOCIO
    if(!tipoVehiculo){
        return {errorMessage:"El tipo de vehiculo es obligatorio",success:false}
    }
    const vehiculo = new Vehiculo(null,tipoVehiculo,url)
    return await vehiculoRepository.save(vehiculo)
}


module.exports = {CreateVehiculo}