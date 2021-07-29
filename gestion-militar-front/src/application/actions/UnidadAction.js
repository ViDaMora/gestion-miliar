import { GET_UNIDAD } from "../types/UnidadYypes";
import EndPointAxios from "../../infrastructure/services/api/axios"


export function getUnidad() {
    return async (dispatch) =>{
        const response = await EndPointAxios.get('/unidad');
        dispatch(listUnidad(response.data));
    }}


    const listUnidad =(response)=>({
        type: GET_UNIDAD,
        payload: response
    })