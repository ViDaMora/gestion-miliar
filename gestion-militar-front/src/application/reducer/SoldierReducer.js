import { GET_SOLDIER, GET_SOLDIER_ERROR } from '../types/SoldierTypes';

export default function SoldierInfo(state = {}, action) {
    switch (action.type) {
        case GET_SOLDIER:
            return {
                ...state,
                soldierInfo: action.payload
            }
        case GET_SOLDIER_ERROR:
            return { ...state, error: action.payload, loading: false };
        default:
            return state
    }
}