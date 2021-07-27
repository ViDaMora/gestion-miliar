const cadenaMando = require('../CadenaMando')
const Operacion = require('../../../domain/Operacion/Operacion')


// OP NO TRIVIAL
async function Crear_Operacion(unidadId,lider,descripcion,pais,nombre,UnidadRepository,OperacionRepository,LiderRepository){


    if(lider){
        for(const unidadid in unidadId){
            let unidadAsignada = await UnidadRepository.findById(unidadid)
            if(cadenaMando.get(unidadAsignada.encargado.autoridad)<cadenaMando.get(lider.autoridad)){
                return {
                    errorMessage: "El lider no puede tener menor autoridad que un encargado de unidad"
                }
            }
        }
    }

    let operacion = new Operacion(null,unidadId,lider,descripcion,pais,nombre)

    let liderExiste = await LiderRepository.findById(lider.id)
    if(!liderExiste){
        return {
            errorMessage: "El lider que intenta asignar no existe",
            succes:false
        }
    }
    if(liderExiste.activo){
        return {errorMessage: "El lider ya esta asignado a una unidad", succes:false}
    }
    await LiderRepository.updateActivo(lider.id)
    return await OperacionRepository.save(operacion)
}

module.exports = {Crear_Operacion}