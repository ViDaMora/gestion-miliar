import { GET_UNIDAD, ADD_UNIDAD_ERROR } from "../types/UnidadYypes";
import SoldierAxios from "../../infrastructure/services/api/axios"


export function getUnidad() {
    return async (dispatch) =>{
        const response = await SoldierAxios.get('/unidad');
        dispatch(listUnidad(response.data));
    }}


    const listUnidad =(response)=>({
        type: GET_UNIDAD,
        payload: response
    })