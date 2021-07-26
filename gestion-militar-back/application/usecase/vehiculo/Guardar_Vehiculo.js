
const Vehiculo = require('../../../domain/Vehiculo/Vehiculo')

async function CreateVehiculo(tipoVehiculo,url,vehiculoRepository){
    //AQUI SE VALIDA Y LOGICA DE NEGOCIO
    const vehiculo = new Vehiculo(null,tipoVehiculo,url)

    return vehiculoRepository.save(vehiculo)
}


module.exports = {CreateVehiculo}