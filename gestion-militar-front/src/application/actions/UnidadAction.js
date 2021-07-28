import { GET_UNIDAD, ADD_UNIDAD_ERROR } from "../types/UnidadYypes";
import UnidadAxios from "../../infrastructure/services/api/axios"


export function getUnidad() {
    return async (dispatch) =>{
        const response = await UnidadAxios.get('/unidad');
        dispatch(listUnidad(response.data));
    }}


    const listUnidad =(response)=>({
        type: GET_UNIDAD,
        payload: response
    })