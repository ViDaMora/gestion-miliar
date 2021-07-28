import { GET_LIDER, GET_LIDER_ERROR } from '../types/LiderTypes';

const initialState = {
    lideres: [],
    error: null,
}

export default function lideresInfo(state = initialState, action) {
    switch (action.type) {
        case GET_LIDER:
            return {
                ...state,
                lideres: action.payload
            }
        case GET_LIDER_ERROR:
            return { ...state, error: action.payload, loading: false };
        default:
            return state
    }
}