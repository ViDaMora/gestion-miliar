const cadenaMando = require('../CadenaMando')
const Unidad = require('../../../domain/Unidad/Unidad')

async function Crear_Unidad(cc,tipoUnidad,UnidadRepository,MilitarRepository){

    if(!cc){
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

    if(cadenaMando.get(militar.autoridad)>7){

        return{
            errorMessage: "el militar no puede tener una autoridad menor a capitan",succes:false
    }

    }
    await MilitarRepository.updateEstado(cc)
    militar.activo=true
    let unidad = new Unidad(null,tipoUnidad,militar,false,null,null)
    let unidadNueva=await UnidadRepository.save(unidad)
    return unidadNueva


}

module.exports = {Crear_Unidad}



