async function Retirar_Lider(cc,LiderRepository){
    let liderExist = await LiderRepository.findByCC(cc)

    if(!liderExist){
        return {errorMessage: "Lider no encontrado",
                 succes: false}
    }
     await LiderRepository.updateActive(cc)
     return {message: "Lider retirado con exito",
            succes: true}
}

module.exports = {Retirar_Lider}