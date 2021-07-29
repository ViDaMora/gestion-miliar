const cadenaMando = require('../CadenaMando')


async function Asignar_Unidad (unidadId, operacionId,OperacionRepository,UnidadRepository){


    if(!unidadId){
        return {
            errorMessage: "Debe ingresar id",
            success: false
        }
    }
    let unidad = await UnidadRepository.findById(unidadId)
    let operacion = await OperacionRepository.findById(operacionId)

    if(!unidad){
        return {
            errorMessage: "Unidad no fue encontrada",
            success: false
        }
    }

    if(unidad.asignada){
        return {
            errorMessage: "La unidad ya esta asignada a otra operacion",
            success: false
        }
    }

    if(cadenaMando.get(unidad.encargado.autoridad)<cadenaMando.get(operacion.lider.autoridad)){
        return {
            errorMessage: "El lider de la unidad militar no debe tener mayor autoridad que el lider de la operacion",
            success: false
        }
    }


    await UnidadRepository.updateEstado(unidadId)
    let respuesta= await OperacionRepository.asignarUnidad(operacionId,unidad)
    return respuesta

}

module.exports = {Asignar_Unidad}