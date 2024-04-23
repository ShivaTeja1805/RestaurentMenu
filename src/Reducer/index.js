import { combineReducers } from "redux";
import tablereducer from './TableReducer';
import filterreducer from './FilterReducer';
import orderreducer from './OrderReducer';


const reducer = combineReducers({
    TableReducer:tablereducer,
    FilterReducer:filterreducer,
    OrderReducer: orderreducer,

})

export default reducer;