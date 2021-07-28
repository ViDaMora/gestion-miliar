import { combineReducers } from 'redux';
import SoldierInfo from './SoldierReducer';

const reducer = combineReducers({
    soldiers: SoldierInfo,
})

export default reducer;