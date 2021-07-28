const cadenaMando = require('../CadenaMando')


async function Asignar_Militar (cc,unidadId,UnidadRepository,MilitarRepository){


    if(!cc){
        return {
            errorMessage: "Es necesario una cedula para asignar el militar",
            success: false
        }
    }
    let militar = await MilitarRepository.findByCC(cc)

    if(!militar){
        return {
            errorMessage: "Militar no fue encontrado",
            success: false
        }
    }

    if(militar.activo){
        return {
            errorMessage: "El militar ya esta asignado a otra unidad",
            success: false
        }
    }


    let unidad = await UnidadRepository.findById(unidadId)

  
        if(cadenaMando.get(unidad.encargado.autoridad)> cadenaMando.get(militar.autoridad)){
            return {
                errorMessage: "Un militar de menor rango no puede dirigir militares superiores en autoridad",
                success: false
            }
       }


    await MilitarRepository.updateEstado(cc)
    let respuesta= await UnidadRepository.asignarMilitar(unidadId,militar)
    return respuesta

}

module.exports = {Asignar_Militar}