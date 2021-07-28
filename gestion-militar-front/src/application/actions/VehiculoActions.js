import { GET_VEHICULO, GET_VEHICULO_ERROR } from '../types/VehiculoTypes';
import EndPointAxios from '../../infrastructure/services/api/axios'

export function getVehiculos(){
    return async (dispatch) => {
        const response = await EndPointAxios.get('/vehiculo')
        dispatch(listVehiculos(response.data))
    }
}



const listVehiculos =  (response) => ({
    type: GET_VEHICULO,
    payload: response
})