const Militar = require('../../../domain/Militar/Militar')
async function Obtener_Militares(MilitarRepository){
    let militares = await MilitarRepository.findAll()
    return militares.map(militar => new Militar(militar._id,militar.nombre,militar.email,militar.activo,militar.nacionalidad,militar.cc,militar.autoridad,militar.genero,militar.edad))
}

module.exports = {Obtener_Militares}