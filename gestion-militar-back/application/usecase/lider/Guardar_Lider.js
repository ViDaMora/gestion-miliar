const cadenaMando = require('../CadenaMando')
const Lider = require('../../../domain/Lider/Lider')
async function Guardar_Lider(cedula,LiderRepository,MilitarRepository){

    let liderExist = await LiderRepository.findByCC(cedula)
    if(liderExist){
        return {errorMessage: "Este lider ya existe en la base de datos"}
    }


    liderExist = await MilitarRepository.findByCC(cedula)

    if(!liderExist){
        return {errorMessage: "El lider debe ser un militar para poder ser asignado",
    success: false}
    }

    const {nombre,nacionalidad,cc,autoridad,genero,edad,activo} = liderExist
    if(cadenaMando.get(autoridad) > 5 ){
        return {errorMessage: "Un lider debe tener como minimo la autoridad de coronel",
                 sucess:null
            }
    }

    if(activo){
        return {errorMessage: "El militar ya esta asignado a una unidad",
                 sucess:false
            }
    }


    await MilitarRepository.updateEstado(cc)
    const lider = new Lider(null,nombre,nacionalidad,cc,autoridad,genero,edad,false)
    return await LiderRepository.save(lider)

}

module.exports = {Guardar_Lider}