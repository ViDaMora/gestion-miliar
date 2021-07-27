const Lider = require('../../../domain/Lider/Lider')
async function Obtener_Lideres(LiderRepository){
    let lideres = await LiderRepository.findAll()
    return lideres.map(lider => new Lider(lider._id,lider.nombre,lider.nacionalidad,lider.cc,lider.autoridad,lider.genero,lider.edad,lider.activo))
}

module.exports = {Obtener_Lideres}