let {CreateVehiculo} = require('../../../application/usecase/vehiculo/Guardar_Vehiculo')
let {VehiculoRepositoryMongo} = require('../../repository/VehiculoRepository')


async function addVehiculo (req,res){
    try{
        const {tipoVehiculo, url}=req.body
        let vehiculo=await CreateVehiculo(tipoVehiculo,url,VehiculoRepositoryMongo.prototype)
        res.json(vehiculo)
    }catch(error){
        res.status(500).send(error);
    }
}


module.exports ={addVehiculo}