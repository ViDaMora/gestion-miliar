import { combineReducers } from 'redux';
import SoldierInfo from './SoldierReducer';
import lideresInfo from './LiderReducer';
import UnidadesInfo from './UnidadReducer';
import VehiculosInfo from './VehiculoReducer';

const reducer = combineReducers({
    soldiers: SoldierInfo,
    lideres: lideresInfo,
    vehiculos: VehiculosInfo,
    unidades: UnidadesInfo

})

export default reducer;