const cadenaMando = require('../CadenaMando')
const Lider = require('../../../domain/Lider/Lider')
async function Guardar_Lider(nombre,activo,nacionalidad,cc,autoridad,genero,edad,LiderRepository){
    let liderExist = await LiderRepository.findById(id)
    if(liderExist){
        return {errorMessage: "Este lider ya existe en la base de datos"}
    }

    if(cadenaMando.get(autoridad) > 5 ){
        return {errorMessage: "Un lider debe tener como minimo la autoridad de coronel",
            cadenaMando: CadenaMando}
    }

    const lider = new Lider(null,nombre,nacionalidad,cc,autoridad,genero,edad,activo)

    return await LiderRepository.save(lider)

}

module.exports = {Guardar_Lider}