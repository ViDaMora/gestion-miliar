import { ADD_SOLDIER, GET_SOLDIER, GET_SOLDIER_ERROR } from '../types/SoldierTypes';

const initialState = {
    soldier: [],
    error: null,
}

export default function SoldierInfo(state = initialState, action) {
    switch (action.type) {
        case GET_SOLDIER:
            return {
                ...state,
                soldier: action.payload
            }
        case GET_SOLDIER_ERROR:
            return { ...state, error: action.payload, loading: false };
        case ADD_SOLDIER:
            console.log(action.payload)
            return { ...state, soldier: [...state.soldier, action.payload] }
        default:
            return state
    }
}