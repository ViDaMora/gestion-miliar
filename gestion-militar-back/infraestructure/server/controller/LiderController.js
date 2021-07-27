let {CreateLider} = require('../../../application/usecase/lider/Guardar_Lider')
let {borrarLider}=require('../../../application/usecase/lider/Retirar_Lider')
let {Obtener_Lideres} = require('../../../application/usecase/lider/Obtener_lideres')
let {LiderRepositoryMongo} = require('../../repository/LiderRepository')

async function addLider (req,res){
    try{
        const {nombre,nacionalidad,cc,autoridad,genero,edad,activo}=req.body
        let lider=await CreateLider(nombre,nacionalidad,cc,autoridad,genero,edad,activo,LiderRepositoryMongo.prototype)
        res.json(lider)
    }catch(error){
        res.status(500).send(error);
    }
}
async function getLideres(req,res){
    try{
        let lider=await Obtener_Lideres(LiderRepositoryMongo.prototype)
        res.json(lider)
    }catch(error){
        res.status(500).send(error);
    }
}



module.exports ={getLideres}
