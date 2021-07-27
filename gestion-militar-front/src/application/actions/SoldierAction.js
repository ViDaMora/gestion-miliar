import { SET_SOLDIER } from "../types/SoldierTypes";

export const SetSoldierInfo = (soldierInfo) => {
    return {
        type: SET_SOLDIER,
        payload: soldierInfo,
    };
};