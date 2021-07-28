import { combineReducers } from 'redux';
import SoldierInfo from './SoldierReducer';

const rootReducer = combineReducers({
    soldiers: SoldierInfo,
})

export default rootReducer;