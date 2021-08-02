const Unidad = require('../../../domain/Unidad/Unidad')


async function Obtener_Unidades(UnidadRepository){
    let unidades = await UnidadRepository.findAll({})
    return unidades.map(unidad => new Unidad(unidad.id,unidad.tipoUnidad,unidad.encargado,unidad.asignada,unidad.militares,unidad.vehiculos))
}
module.exports = {Obtener_Unidades}