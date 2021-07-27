
const Militar = require('../../../domain/Militar/Militar')

async function CreateMilitar(nombre,activo,nacionalidad,cc,autoridad,genero,edad,MilitarRepository){
    //AQUI SE VALIDA LA LOGICA DE NEGOCIO
    const militar = new Militar(null,nombre,activo,nacionalidad,cc,autoridad,genero,edad)

    return MilitarRepository.save(militar)
}


module.exports = {CreateMilitar}