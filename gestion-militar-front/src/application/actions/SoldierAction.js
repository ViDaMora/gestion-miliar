import { GET_SOLDIER } from "../types/SoldierTypes";
import clientAxios from "../../infrastructure/services/api/axios";

// export const GetSoldierInfo = (soldierInfo) => {
//     return {
//         type: GET_SOLDIER,
//         payload: soldierInfo,
//     };
// };

export function soldierAction(){
    return (dispatch) =>{
        console.log("Estoy entrando a la accion");
        const response = clientAxios.get('/militar');
        dispatch(listSoldier(response.data));
        console.log(response)
    }
}

const listSoldier = (response) => ({
    type: GET_SOLDIER,
    payload: response
})