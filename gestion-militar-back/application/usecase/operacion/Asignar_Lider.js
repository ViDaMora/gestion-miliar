const cadenaMando = require('../CadenaMando')


async function Asignar_Lider (cc,operacionId,OperacionRepository,LiderRepository){


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

    if(cadenaMando.get(lider.autoridad)==1){
        return {
            errorMessage: "Un militar "+lider.autoridad+" no puede liderar operacion",
            success: false
        }
   }

    
    //let operacion = await OperacionRepository.findById(opeacionId)

    await LiderRepository.updateEstado(cc)
    let respuesta= await OperacionRepository.asignarLider(operacionId,lider)
    return respuesta

}

module.exports = {Asignar_Lider}