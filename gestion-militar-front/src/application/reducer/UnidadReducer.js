import { GET_UNIDAD, GET_UNIDAD_ERROR, ASSIGN_SOLDIER, ADD_UNIDAD, ADD_UNIDAD_ERROR } from '../types/UnidadYypes';

const initialState = {
    unidades: [],
    error: null,
}

export default function UnidadesInfo(state = initialState, action) {
    switch (action.type) {
        case GET_UNIDAD:
            return { ...state, unidades: action.payload }
        case GET_UNIDAD_ERROR:
            return { ...state, error: action.payload };
        case ADD_UNIDAD:
            return { ...state, unidades: [...state.unidades, action.payload] };
        case ADD_UNIDAD_ERROR:
            return { ...state, error: action.payload };
        case ASSIGN_SOLDIER:
            return { ...state, unidades: [...state.unidades, action.payload] };
        default:
            return state
    }
}