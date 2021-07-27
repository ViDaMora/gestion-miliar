let {Crear_Unidad} = require('../../../application/usecase/unidad/Crear_Unidad')
let {UnidadRepositoryMongo} = require('../../repository/UnidadRepository')
let {MilitarRepositoryMongo}= require('../../repository/MilitarRepository')

async function addUnidad (req,res){
    try{

        const {cc,tipoUnidad}=req.body
        let unidad=await Crear_Unidad(cc,tipoUnidad,UnidadRepositoryMongo.prototype,MilitarRepositoryMongo.prototype)
        res.json(unidad)
    }catch(error){
        res.status(500).send(error);
    }
}


module.exports ={Crear_Unidad}
