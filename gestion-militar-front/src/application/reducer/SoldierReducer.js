import {
    ADD_SOLDIER,
    DELETE_SOLDIER,
    GET_SOLDIER,
    GET_SOLDIER_ERROR,
    UPDATE_SOLDIER
} from "../types/SoldierTypes";

const initialState = {
    soldier: [],
    error: null,
};

export default function SoldierInfo(state = initialState, action) {
    switch (action.type) {
        case GET_SOLDIER:
            return { ...state, soldier: action.payload, };
        case GET_SOLDIER_ERROR:
            return { ...state, error: action.payload };
        case ADD_SOLDIER:
            return { ...state, soldier: [...state.soldier, action.payload] };
        case DELETE_SOLDIER:
            return { ...state, soldier: [...state.soldier.filter(militar => militar.id !== action.payload)] };
        case UPDATE_SOLDIER:
            let militarUpdated = state.soldier.filter(militar=> militar.cc === action.payload)
            militarUpdated = militarUpdated[0]
            militarUpdated = { ...militarUpdated, activo: true }
            return { ...state, soldier: [...state.soldier.map(militar => militar.cc === action.payload ? militarUpdated : militar)] };

        default:
            return state;
    }
}
