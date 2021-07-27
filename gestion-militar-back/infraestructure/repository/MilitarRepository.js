const Militar = require('../../domain/Militar/Militar');
const MilitarSchema = require('../db/mongo/Schemas/Militar')
const MilitarRepository = require('../../domain/Militar/MilitarRepository');


class MilitarRepositoryMongo extends MilitarRepository{

    constructor(){
        super();
    }
    async save(militar){
        const {nombre,nacionalidad,cc,autoridad,genero,edad} = militar
        
        const mongoMilitar = new MilitarSchema({nombre,nacionalidad,cc,autoridad,genero,edad})
        await mongoMilitar.save()
        return new Militar(mongoMilitar._id,mongoMilitar.nombre,mongoMilitar.nacionalidad,mongoMilitar.cc,mongoMilitar.autoridad,mongoMilitar.genero,mongoMilitar.edad)
    }

    async delete(id){
        
        return MilitarSchema.deleteOne({_id:id})   
        
    }

    async findById(id){
        return MilitarSchema.findOne({_id:id})
    }

}
module.exports = {MilitarRepositoryMongo}