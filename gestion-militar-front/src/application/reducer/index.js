import { combineReducers } from 'redux';
import SoldierInfo from './SoldierReducer';
import lideresInfo from './LiderReducer';

const reducer = combineReducers({
    soldiers: SoldierInfo,
    lideres: lideresInfo,
})

export default reducer;