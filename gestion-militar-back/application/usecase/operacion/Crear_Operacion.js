const cadenaMando = require('../CadenaMando')
const Operacion = require('../../../domain/Operacion/Operacion')


// OP NO TRIVIAL
async function Crear_Operacion(liderCC,descripcion,pais,nombre,OperacionRepository,LiderRepository){

    let lider = await LiderRepository.findByCC(liderCC)

    if(!lider){
        return {errorMessage: "Para crear una operacion require un lider, ingrese un lider cc valido",
                succes:false}
    }
   /* if(lider){
        for(const unidadid in unidades){
            let unidadAsignada = await UnidadRepository.findById(unidadid)
            if(cadenaMando.get(unidadAsignada.encargado.autoridad)<cadenaMando.get(lider.autoridad)){
                return {
                    errorMessage: "El lider no puede tener menor autoridad que un encargado de unidad"
                }
            }
        }
    }*/



  
    if(lider.activo){
        return {errorMessage: "El lider ya lidera una operacion", succes:false}
    }
    lider.activo= true
    let operacion = new Operacion(null,null,lider,descripcion,pais,nombre)
    await LiderRepository.updateActivo(liderCC)
    return await OperacionRepository.save(operacion)
}

module.exports = {Crear_Operacion}