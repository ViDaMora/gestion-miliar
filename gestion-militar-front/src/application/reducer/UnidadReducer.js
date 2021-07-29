import { GET_UNIDAD, GET_UNIDAD_ERROR } from '../types/UnidadYypes';

const initialState = {
    unidades: [],
    error: null,
}

export default function UnidadesInfo(state = initialState, action) {
    switch (action.type) {
        case GET_UNIDAD:
            return {
                ...state,
                unidades: action.payload
            }
        case GET_UNIDAD_ERROR:
            return { ...state, error: action.payload, loading: false };
        default:
            return state
    }
}