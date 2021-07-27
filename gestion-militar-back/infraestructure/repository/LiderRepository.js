const Lider = require('../../domain/Lider/Lider');
const LiderSchema = require('../db/mongo/Schemas/Lider')
const LiderRepository = require('../../domain/Lider/LiderRepository');


class LiderRepositoryMongo extends LiderRepository{

    constructor(){
        super();
    }
    async save(lider){
        const {nombre,nacionalidad,cc,autoridad,genero,edad,activo} = lider
        const mongoLider = new LiderSchema({nombre,nacionalidad,cc,autoridad,genero,edad,activo})
        let res =await mongoLider.save()

        return new Lider(mongoLider._id,mongoLider.nombre,mongoLider.nacionalidad,mongoLider.cc ,mongoLider.autoridad,mongoLider.genero,mongoLider.edad,mongoLider.activo)
    }

    async delete(id){
        
        return LiderSchema.deleteOne({_id:id})   
        
    }

    async findById(id){
        return LiderSchema.findOne({_id:id})
    }

    async findAll(){
        return LiderSchema.find({})
    }

    async findByCC(cc){
        return LiderSchema.findOne({cc:cc})
    }

    async updateActive(cc){
        return LiderSchema.update({cc:cc},{activo:false})
    }

}
module.exports = {LiderRepositoryMongo}