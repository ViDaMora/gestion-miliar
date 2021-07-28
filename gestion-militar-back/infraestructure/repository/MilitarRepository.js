const Militar = require('../../domain/Militar/Militar');
const MilitarSchema = require('../db/mongo/Schemas/Militar')
const MilitarRepository = require('../../domain/Militar/MilitarRepository');


class MilitarRepositoryMongo extends MilitarRepository{

    constructor(){
        super();
    }
    async save(militar){
        const {nombre,nacionalidad,cc,email,activo,autoridad,genero,edad} = militar

        const mongoMilitar = new MilitarSchema({nombre,email,activo,nacionalidad,cc,autoridad,genero,edad})
        console.log("mongoMilitar")

        let res =await mongoMilitar.save()
        return new Militar(mongoMilitar._id,mongoMilitar.nombre,mongoMilitar.email,mongoMilitar.activo ,mongoMilitar.nacionalidad,mongoMilitar.cc,mongoMilitar.autoridad,mongoMilitar.genero,mongoMilitar.edad)
    }

    async delete(id){
        
        return MilitarSchema.deleteOne({_id:id})   
        
    }

    async findById(id){
        return MilitarSchema.findOne({_id:id})
    }
    
    async findByCC(cc){
        return MilitarSchema.findOne({cc:cc})
    }

    async findAll(){
        return MilitarSchema.find({})
    }


    async findByEmail(email){
        return MilitarSchema.findOne({email:email})
    }

    
    async updateEstado(cc){
        return MilitarSchema.updateOne({cc:cc},{activo:true})
    }

}
module.exports = {MilitarRepositoryMongo}