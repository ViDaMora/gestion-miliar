import { SET_SOLDIER, ERROR } from '../types/SoldierTypes';

export default function SoldierInfo(state = {}, action) {
    switch (action.type) {
        case SET_SOLDIER:
            return {
                ...state,
                soldierInfo: action.payload
            }
        case ERROR:
            return { ...state, error: action.payload, loading: false };
        default:
            return state
    }
}