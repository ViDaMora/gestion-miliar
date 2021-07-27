let {CreateMilitar} = require('../../../application/usecase/militar/Guardar_Militar')
let {borrarMilitar}=require('../../../application/usecase/militar/Borrar_Militar')
let {Obtener_Militares} = require('../../../application/usecase/militar/Obtener_Militares')
let {MilitarRepositoryMongo} = require('../../repository/MilitarRepository')


async function addMilitar (req,res){
    try{
        const {nombre,email,nacionalidad,cc,autoridad,genero,edad}=req.body
        let militar=await CreateMilitar(nombre,email,nacionalidad,cc,autoridad,genero,edad,MilitarRepositoryMongo.prototype)
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


async function getMilitares(req,res){
    try{
        let militar=await Obtener_Militares(MilitarRepositoryMongo.prototype)
        res.json(militar)
    }catch(error){
        res.status(500).send(error);
    }
}



module.exports ={addMilitar,deleteMilitar,getMilitares}
