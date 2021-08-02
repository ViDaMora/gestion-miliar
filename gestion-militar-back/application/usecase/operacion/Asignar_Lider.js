const cadenaMando = require('../CadenaMando')


async function Asignar_Lider (cc,operacionId,OperacionRepository,LiderRepository,UnidadRepository){


    if(!cc){
        return {
            errorMessage: "Es necesario una cedula para asignar el Lider",
            success: false
        }
    }

    let lider = await LiderRepository.findByCC(cc)

    if(!lider){
        return {
            errorMessage: "Lider no fue encontrado",
            success: false
        }
    }

    if(lider.activo){
        return {
            errorMessage: "El lider ya esta asignado a otra operacion",
            success: false
        }
    }

    /*if(cadenaMando.get(lider.autoridad)==1){
        return {
            errorMessage: "Un militar "+lider.autoridad+" no puede liderar operacion",
            success: false
        }
   }*/
   
    let operacion =await OperacionRepository.findById(operacionId)
    if(!operacion){
        return {
            errorMessage: "La operacion debe existir",
            success: false
        }
    }

    let unidades = operacion.unidades
    for(let i=0;i<unidades.length;i++){
        let unidad = unidades[i]
        unidad = await UnidadRepository.findById(unidad)
        if(cadenaMando.get(unidad.encargado.autoridad)< cadenaMando.get(lider.autoridad)){
            return {errorMessage: "No se puede asignar un lider a  para dirigir Unidades con mayor autoridad", success: false}
        }
    }

    await LiderRepository.updateInactivo(operacion.lider.cc)
    await LiderRepository.updateActivo(cc)
    await OperacionRepository.asignarLider(operacionId,lider)
    lider.activo = true
    operacion.lider = lider
    return operacion

}

module.exports = {Asignar_Lider}