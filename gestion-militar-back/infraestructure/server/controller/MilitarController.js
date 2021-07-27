let {CreateMilitar} = require('../../../application/usecase/militar/Guardar_Militar')
let {borrarMilitar}=require('../../../application/usecase/militar/Borrar_Militar')
let {VehiculoRepositoryMongo, MilitarRepositoryMongo} = require('../../repository/MilitarRepository')


async function addMilitar (req,res){
    try{
        const {nombre,nacionalidad,cc,autoridad,genero,edad}=req.body
        let militar=await CreateMilitar(nombre,nacionalidad,cc,autoridad,genero,edad,MilitarRepositoryMongo.prototype)
        res.json(militar)
    }catch(error){
        res.status(500).send(error);
    }
}

async function deleteMilitar(req,res){
    try {
        const{id}=req.body
        let militar=await borrarMilitar(id,MilitarRepositoryMongo.prototype)
        res.json(militar)
    } catch (error) {
        res.status(500).send(error);
    }
}


module.exports ={addMilitar,deleteMilitar}
