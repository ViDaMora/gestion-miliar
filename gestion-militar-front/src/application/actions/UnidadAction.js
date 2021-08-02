import { GET_UNIDAD, ASSIGN_SOLDIER, ASSIGN_SOLDIER_ERROR, ADD_UNIDAD, ADD_UNIDAD_ERROR } from "../types/UnidadYypes";
import EndPointAxios from "../../infrastructure/services/api/axios"
import { DELETE_SOLDIER_ERROR, UPDATE_SOLDIER } from "../types/SoldierTypes";


export function getUnidad() {
    return async (dispatch) => {
        const response = await EndPointAxios.get('/unidad');
        dispatch(listUnidad(response.data));
    }
}

export function createUnidadAction(unidad) {
    return async (dispatch) => {
        try {
            const resp = await EndPointAxios.post('/unidad', unidad);
            if (resp.data.errorMessage) {
                alert(resp.data.errorMessage)
            }
            else {
                dispatch(createUnidad(resp.data));
                alert("Unidad creada correctamente");
            }
        } catch (error) {
            dispatch(createUnidadError(error));
        }
    }
}

export function AsignarMilitarAction(id, cc) {
    return async (dispatch) => {
        try {
            const resp = await EndPointAxios.put('/unidad', { unidadId: id, cc: cc });
            if (resp.data.errorMessage) {
                alert(resp.data.errorMessage)
            }
            else {
                dispatch(asignarMilitar(resp.data))
                alert("Militar asignado correctamente");
            }
        } catch (error) {
            dispatch(asignarMilitarError(error))
        }
    }
}

const listUnidad = (response) => ({
    type: GET_UNIDAD,
    payload: response
});

const createUnidad = (unidad) => ({
    type: ADD_UNIDAD,
    payload: unidad
});

const createUnidadError = (error) => ({
    type: ADD_UNIDAD_ERROR,
    payload: error
});

const asignarMilitar = (body) => ({
    type: ASSIGN_SOLDIER,
    payload: body
});

const asignarMilitarError = (error) => ({
    type: ASSIGN_SOLDIER_ERROR,
    payload: error
});