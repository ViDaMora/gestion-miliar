import { GET_SOLDIER } from "../types/SoldierTypes";

export const GetSoldierInfo = (soldierInfo) => {
    return {
        type: GET_SOLDIER,
        payload: soldierInfo,
    };
};