const Operacion = require('../../../domain/Operacion/Operacion')
const Unidad = require('../../../domain/Unidad/Unidad')

// OP NO TRIVIAL
async function Terminar_Operacion(id,UnidadRepository,OperacionRepository){

    let operacion = await OperacionRepository.findById(id)
    if(!operacion){
        return {errorMessage: 'Operacion no existe',
        succes:false}
    }
    let operacionTerminada = new Operacion(operacion._id,operacion.unidadId,operacion.lider,operacion.descripcion,operacion.pais,false,operacion.name)
    await OperacionRepository.update(operacionTerminada)
    
    for(let unidad in  operacion.unidadId){
        let unidadDesactivada = await UnidadRepository.findById(unidad)
        let unidadActualizada= new Unidad(unidadDesactivada._id,unidadDesactivada.tipoUnidad,unidadDesactivada.encargado,
            false,unidadDesactivada.militar,unidadDesactivada.vehiculos)
        await UnidadRepository.update(unidadActualizada)
    }

    return {message: "Operacion actualizada con exito",
    succes:true,
    operacion:operacionTerminada}

}

module.exports = {Terminar_Operacion}
