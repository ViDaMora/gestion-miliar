async function Retirar_Lider(id,LiderRepository){
    let liderExist = await LiderRepository.findById(id)
    if(!liderExist){
        return {errorMessage: "Lider no encontrado",
                 succes: false}
    }
     await LiderRepository.delete(id)
     return {message: "Lider eliminado con exito",
            succes: true}
}

module.exports = {Retirar_Lider}