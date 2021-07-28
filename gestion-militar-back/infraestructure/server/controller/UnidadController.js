let {Crear_Unidad} = require('../../../application/usecase/unidad/Crear_Unidad')
let {Asignar_Militar} = require('../../../application/usecase/unidad/Asignar_Militar')
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



async function addMilitar(req,res){

    try {
        const {cc,unidadId} = req.body
        let unidad = await Asignar_Militar(cc,unidadId,UnidadRepositoryMongo.prototype,MilitarRepositoryMongo.prototype)
        return unidad
    } catch (error) {
        res.status(500).send(error);

    }
}


module.exports ={addUnidad,addMilitar}
