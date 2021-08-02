import { combineReducers } from 'redux';
import SoldierInfo from './SoldierReducer';
import lideresInfo from './LiderReducer';
import UnidadesInfo from './UnidadReducer';
import VehiculosInfo from './VehiculoReducer';
import operacionesInfo from './OperacionReducer';

const reducer = combineReducers({
    soldiers: SoldierInfo,
    lideres: lideresInfo,
    vehiculos: VehiculosInfo,
    unidades: UnidadesInfo,
    operaciones: operacionesInfo,

})

export default reducer;