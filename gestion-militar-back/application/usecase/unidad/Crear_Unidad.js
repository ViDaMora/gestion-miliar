const cadenaMando = require('../CadenaMando')
const Unidad = require('../../../domain/Unidad/Unidad')
const Militar = require('../../../domain/Militar/Militar')

async function Crear_Unidad(tipoUnidad,UnidadRepository,MilitarRepository,cc){

    if(cc){
        return {
            errorMessage: "para crear unidad es necesario la cedula del militar"
        }
    }

    let militar=await MilitarRepository.findByCC(cc);

    if(!militar){
        return {
            errorMessage: "militar no existe"
        }
    }

    if(militar.activo){
        return{
                errorMessage: "El militar ya esta asignado a otra unidad",succes:false
    
        }
    }

    if(cadenaMando.get(militar.autoridad)<7){

        return{
            errorMessage: "el militar no puede tener una autoridad menor a capitan",succes:false
    }

    }

    let unidad = new Unidad(null,tipoUnidad,militar,false,null,null)
    await MilitarRepository.updateEstado(militar._id)
    return await UnidadRepository.save(unidad)

}

module.exports = {Crear_Unidad}

