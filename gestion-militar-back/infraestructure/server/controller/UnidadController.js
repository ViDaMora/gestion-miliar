let {Crear_Unidad} = require('../../../application/usecase/unidad/Crear_Unidad')
let {Asignar_Militar} = require('../../../application/usecase/unidad/Asignar_Militar')
let {Asignar_Vehiculo}=require('../../../application/usecase/unidad/Asignar_Vehiculo')
let {Obtener_Unidades} = require('../../../application/usecase/unidad/Obtener_Unidades')
let {UnidadRepositoryMongo} = require('../../repository/UnidadRepository')
let {MilitarRepositoryMongo}= require('../../repository/MilitarRepository')
let { VehiculoRepositoryMongo } = require('../../repository/VehiculoRepository')


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
        res.json(unidad)
    } catch (error) {
        res.status(500).send(error);

    }
}

async function añadirVehiculo(req,res){
    try {
        const {idVehiculo,idUnidad} = req.body
        let unidad = await Asignar_Vehiculo(idVehiculo,idUnidad,UnidadRepositoryMongo.prototype,VehiculoRepositoryMongo.prototype)
        res.json(unidad)
    } catch (error) {
        res.status(500).send(error);

    }
}


async function getUnidades(req,res){
    try{
        let unidades=await Obtener_Unidades(UnidadRepositoryMongo.prototype)
        res.json(unidades)
    }catch(error){
        res.status(500).send(error);
    }
}


module.exports = {addUnidad,addMilitar,añadirVehiculo,getUnidades}
