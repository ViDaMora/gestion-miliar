import { GET_OPERACION, GET_OPERACION_ERROR } from '../types/OperacionTypes';

const initialState = {
    operaciones: [],
    error: null,
}

export default function operacionesInfo(state = initialState, action) {
    switch (action.type) {
        case GET_OPERACION:
            return {
                ...state,
                operaciones: action.payload
            }
        case GET_OPERACION_ERROR:
            return { ...state, error: action.payload, loading: false };
        default:
            return state
    }
}