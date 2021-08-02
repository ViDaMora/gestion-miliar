import { GET_LIDER, ADD_LIDER, ADD_LIDER_ERROR } from "../types/LiderTypes";
import EndPointAxios from "../../infrastructure/services/api/axios";

export function liderAction(){
    return async (dispatch) =>{
        const response = await EndPointAxios.get('/lider');
        dispatch(listarLideres(response.data));
        console.log(response)
    }
}

export function crearLiderAction(lider){
    return async (dispatch) =>{
        dispatch(crearLider())
        try {
            await EndPointAxios.post('/lider', lider);
            alert("Lider asignado correctamente");
        } catch (error) {
            dispatch(crearLiderError(true));
        }
    }
}

const listarLideres = (response) => ({
    type: GET_LIDER,
    payload: response
});

const crearLider = () => ({
    type: ADD_LIDER,
    payload: true
});

const crearLiderError = (error) =>({
    type: ADD_LIDER_ERROR,
    payload: error
});