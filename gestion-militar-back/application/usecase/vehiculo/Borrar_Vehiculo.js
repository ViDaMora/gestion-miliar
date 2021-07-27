
async function  borrarVehiculo(id,VehiculoRepository){
    let vehiculo= await VehiculoRepository.findById(id)
    if(!vehiculo){
        return {errorMessage:"Vehiculo no Encontrado"}
    }
    VehiculoRepository.delete(id)
    return {message: "Vehiculo eliminado con exito",
            succes:true}
}
module.exports={borrarVehiculo}