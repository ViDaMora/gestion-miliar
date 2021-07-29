let {Crear_Operacion} = require('../../../application/usecase/operacion/Crear_Operacion')
let {Asignar_Unidad} = require('../../../application/usecase/operacion/Asignar_Unidad')
let {Obtener_Operaciones} = require('../../../application/usecase/operacion/Obtener_Operaciones')
let {UnidadRepositoryMongo}= require('../../repository/UnidadRepository')
let {OperacionRepositoryMongo}= require('../../repository/OperacionRepository')
let {LiderRepositoryMongo}= require('../../repository/LiderRepository')
const { Obtener_Vehiculos } = require('../../../application/usecase/vehiculo/Obtener_Vehiculos')




async function addOperacion (req,res){
    try{

        const {descripcion,pais,nombre,liderCC}=req.body
        let operacion=await Crear_Operacion(liderCC,descripcion,pais,nombre,OperacionRepositoryMongo.prototype,LiderRepositoryMongo.prototype)
        res.json(operacion)
    }catch(error){
        res.status(500).send(error);
    }
}

async function addUnidad(req,res){
    try {
        const {operacionId,unidad} = req.body
        let respuesta = await Asignar_Unidad(operacionId,unidad,OperacionRepositoryMongo.prototype,UnidadRepositoryMongo.prototype)
        res.json(respuesta)
    } catch (error) {
        res.status(500).send(error);

    }
}

async function getAllOperaciones(req,res){
    try{
        let operaciones=await  Obtener_Operaciones(OperacionRepositoryMongo.prototype)
        res.json(operaciones)
    }catch(error){
        res.status(500).send(error);
    }
}



module.exports = {addOperacion,addUnidad,getAllOperaciones}
