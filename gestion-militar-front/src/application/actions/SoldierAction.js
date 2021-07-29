import { GET_SOLDIER, ADD_SOLDIER, ADD_SOLDIER_ERROR, DELETE_SOLDIER, DELETE_SOLDIER_ERROR, UPDATE_SOLDIER } from "../types/SoldierTypes";
import EndPointAxios from "../../infrastructure/services/api/axios";

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
                alert("Militar creado correctamente");
            }
        } catch (error) {
            dispatch(createSoldierError(true));
        }
    }
}

export function deleteSoldierAction(id) {
    return async (dispatch) => {
        try {
            const resp = await EndPointAxios.delete('/militar/' + id);
            if (resp.data.errorMessage) {
                alert(resp.data.errorMessage)
            }
            else {
                dispatch(deleteSoldier())
                alert("Militar eliminado correctamente");
            }
        } catch (error) {
            dispatch(deleteSoldierError())
        }
    }
}

export function updateSoldierAction(id, body) {
    return async (dispatch) => {
        try {
            await EndPointAxios.put('/militar/' + id, body);
            dispatch({
                type: "EDITAR_ESTADO",
                id: id,
                payload: body,
            })
        } catch (error) {
            dispatch(updateSoldierError())
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

const deleteSoldier = (id) => ({
    type: DELETE_SOLDIER,
    payload: id
});

const deleteSoldierError = (error) => ({
    type: DELETE_SOLDIER_ERROR,
    payload: error
});

const updateSoldier = (body) => ({
    type: UPDATE_SOLDIER,
    payload: body
});

const updateSoldierError = (error) => ({
    type: DELETE_SOLDIER,
    payload: error
});