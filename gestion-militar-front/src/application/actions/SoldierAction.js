import { GET_SOLDIER, ADD_SOLDIER, ADD_SOLDIER_ERROR } from "../types/SoldierTypes";
import SoldierAxios from "../../infrastructure/services/api/axios";

// export const GetSoldierInfo = (soldierInfo) => {
//     return {
//         type: GET_SOLDIER,
//         payload: soldierInfo,
//     };
// };

export function soldierAction(){
    return async (dispatch) =>{
        const response = await SoldierAxios.get('/militar');
        dispatch(listSoldier(response.data));
        console.log(response)
    }
}

export function createSoldierAction(soldier){
    return async (dispatch) =>{
        dispatch(createSoldier())
        try {
            await SoldierAxios.post('/militar', soldier);
            alert("Se ha creado correctamente el militar");
        } catch (error) {
            dispatch(createSoldierError(true));
        }
    }
}

const listSoldier = (response) => ({
    type: GET_SOLDIER,
    payload: response
});

const createSoldier = () => ({
    type: ADD_SOLDIER,
    payload: true
});

const createSoldierError = (error) =>({
    type: ADD_SOLDIER_ERROR,
    payload: error
});