const Unidad = require('../../../domain/Unidad/Unidad')
const Vehiculo = require('../../../domain/Vehiculo/Vehiculo')

async function Asignar_Vehiculo(idVehiculo,idUnidad,UnidadRepository,VehiculoRepository){

    if(!idVehiculo){
        return { 
            errorMessage: "Debe ingresar Id del vehiculo"
        }
    }

    let vehiculo = await VehiculoRepository.findByIdVehiculo(idVehiculo)

    if(!vehiculo){

        return { 
            errorMessage: "El vehiculo no existe"
        }
    }

    let unidad=await UnidadRepository.findById(idUnidad)

    if(vehiculo.tipoVehiculo!=unidad.tipounidad){
        return { 
            errorMessage: "No se permite asignar este vehiculo"
        }

    }
    
    let unidadNueva=await UnidadRepository.Asignar_Vehiculo(vehiculo,idUnidad)
    return unidadNueva

    }


module.exports = {Asignar_Vehiculo}