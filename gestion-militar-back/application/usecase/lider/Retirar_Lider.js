async function Retirar_Lider(id,LiderRepository){
    let liderExist = await LiderRepository.findById(id)
    if(!liderExist){
        return {errorMessage: "Lider no encontrado",
                 succes: false}
    }
     let newLider= await LiderRepository.updateActive(id)
     return {message: "Lider retirado con exito",
            lider: newLider,
            succes: true}
}

module.exports = {Retirar_Lider}