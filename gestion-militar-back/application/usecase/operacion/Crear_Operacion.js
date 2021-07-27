const cadenaMando = require('../CadenaMando')
const Operacion = require('../../../domain/Operacion/Operacion')


async function Crear_Operacion(unidadId,lider,descripcion,pais,nombre,UnidadRepository,OperacionRepository){


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
    return OperacionRepository.save(operacion)

}

module.exports = {Crear_Operacion}