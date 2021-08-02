import { GET_OPERACION, ADD_OPERACION, ADD_OPERACION_ERROR } from "../types/OperacionTypes";
import EndPointAxios from "../../infrastructure/services/api/axios";

export function operacionAction(){
    return async (dispatch) =>{
        const response = await EndPointAxios.get('/operacion');
        dispatch(listarOperaciones(response.data));
        console.log(response)
    }
}

export function crearOperacionAction(operacion){
    return async (dispatch) =>{
        dispatch(crearOperacion())
        try {
            await EndPointAxios.post('/operacion', operacion);
            alert("Se ha creado correctamente la operacion");
        } catch (error) {
            dispatch(crearOperacionError(true));
        }
    }
}

const listarOperaciones = (response) => ({
    type: GET_OPERACION,
    payload: response
});

const crearOperacion = () => ({
    type: ADD_OPERACION,
    payload: true
});

const crearOperacionError = (error) =>({
    type: ADD_OPERACION_ERROR,
    payload: error
});