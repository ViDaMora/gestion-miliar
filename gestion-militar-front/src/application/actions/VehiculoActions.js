import { GET_VEHICULO, ADD_VEHICULO, ADD_VEHICULO_ERROR } from '../types/VehiculoTypes';
import EndPointAxios from '../../infrastructure/services/api/axios'

export function getVehiculos(){
    return async (dispatch) => {
        const response = await EndPointAxios.get('/vehiculo')
        dispatch(listVehiculos(response.data))
    }
}

export function createVehiculoAction(vehiculo) {
    return async (dispatch) => {
        try {
            const resp = await EndPointAxios.post('/vehiculo', vehiculo);
            if (resp.data.errorMessage) {
                alert(resp.data.errorMessage)
            }
            else {
                dispatch(createVehiculo(resp.data));
                alert("Vehículo creado correctamente");
            }
        } catch (error) {
            dispatch(createVehiculoError(true));
        }
    }
}

const listVehiculos =  (response) => ({
    type: GET_VEHICULO,
    payload: response
});

const createVehiculo = (vehiculo) => ({
    type: ADD_VEHICULO,
    payload: vehiculo
});

const createVehiculoError = (error) => ({
    type: ADD_VEHICULO_ERROR,
    payload: error
});