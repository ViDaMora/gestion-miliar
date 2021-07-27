
async function  borrarMilitar(id,MilitarRepository){
    let militar= await MilitarRepository.findById(id)
    if(!militar){
        return {errorMessage:"militar no Encontrado"}
    }
    MilitarRepository.delete(id)
    return {message: "Militar eliminado con exito",
            succes:true}
}
module.exports={borrarMilitar}