
const Militar = require('../../../domain/Militar/Militar')

async function CreateMilitar(nombre,email,nacionalidad,cc,autoridad,genero,edad,MilitarRepository){
    //AQUI SE VALIDA LA LOGICA DE NEGOCIO
    
    if(!email){
        return {errorMessage:"Para crear un militar por lo menos debe existir un email",
    succes:false};
    }
    
    let militarExiste = await MilitarRepository.findByEmail(email) || await MilitarRepository.findByCC(cc)
    if(militarExiste){
        return {errorMessage:"El militar ingresado ya existe",
         succes:false};
    }
     
    
    const militar = new Militar(null,nombre,email,false,nacionalidad,cc,autoridad,genero,edad)

    let respuest= await MilitarRepository.save(militar)
    return respuest;
}


module.exports = {CreateMilitar}


