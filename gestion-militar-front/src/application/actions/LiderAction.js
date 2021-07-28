import { GET_LIDER, ADD_LIDER, ADD_LIDER_ERROR } from "../types/LiderTypes";
import SoldierAxios from "../../infrastructure/services/api/axios";

// export const GetSoldierInfo = (soldierInfo) => {
//     return {
//         type: GET_SOLDIER,
//         payload: soldierInfo,
//     };
// };

export function liderAction(){
    return async (dispatch) =>{
        const response = await SoldierAxios.get('/lider');
        dispatch(listarLideres(response.data));
        console.log(response)
    }
}

export function crearLiderAction(soldier){
    return async (dispatch) =>{
        dispatch(crearLider())
        try {
            await SoldierAxios.post('/lider', soldier);
            alert("Se ha creado correctamente el militar");
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