let {Guardar_Lider} = require('../../../application/usecase/lider/Guardar_Lider')
let {Retirar_Lider}=require('../../../application/usecase/lider/Retirar_Lider')
let {Obtener_Lideres} = require('../../../application/usecase/lider/Obtener_lideres')
let {LiderRepositoryMongo} = require('../../repository/LiderRepository')

async function addLider (req,res){
    try{

        const {nombre,nacionalidad,cc,autoridad,genero,edad}=req.body
        let lider=await Guardar_Lider(nombre,nacionalidad,cc,autoridad,genero,edad,LiderRepositoryMongo.prototype)
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
 async function retirarLider(req,res){
     try {
         const {cc} = req.body
         let lider = await Retirar_Lider(cc,LiderRepositoryMongo.prototype)
         res.json(lider)
     } catch (error) {
        res.status(500).send(error);
     }
 }


module.exports ={addLider,getLideres,retirarLider}
