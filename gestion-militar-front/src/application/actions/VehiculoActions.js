import { GET_VEHICULO, GET_VEHICULO_ERROR } from '../types/VehiculoTypes';
import VehiculoAxios from '../../infrastructure/services/api/axios'
import { type } from 'os';

export function getVehiculos(){
    return async (dispatch) => {
        const response = await VehiculoAxios.get('/vehiculo')
        dispatch(listVehiculos(response.data))
    }
}



const listVehiculos =  (response) => ({
    type: GET_VEHICULO,
    payload: response
})