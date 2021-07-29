import { GET_SOLDIER, ADD_SOLDIER, ADD_SOLDIER_ERROR } from "../types/SoldierTypes";
import EndPointAxios from "../../infrastructure/services/api/axios";

// export const GetSoldierInfo = (soldierInfo) => {
//     return {
//         type: GET_SOLDIER,
//         payload: soldierInfo,
//     };
// };

export function soldierAction() {
    return async (dispatch) => {
        const response = await EndPointAxios.get('/militar');
        dispatch(listSoldier(response.data));
    }
}

export function createSoldierAction(soldier) {
    return async (dispatch) => {
        try {
            const resp = await EndPointAxios.post('/militar', soldier);
            if (resp.data.errorMessage) {
                alert(resp.data.errorMessage)
            }
            else {
                dispatch(createSoldier(resp.data));
                alert("Se ha creado correctamente el militar");
            }
        } catch (error) {
            dispatch(createSoldierError(true));
        }
    }
}

const listSoldier = (response) => ({
    type: GET_SOLDIER,
    payload: response
});

const createSoldier = (soldier) => ({
    type: ADD_SOLDIER,
    payload: soldier
});

const createSoldierError = (error) => ({
    type: ADD_SOLDIER_ERROR,
    payload: error
});