import {combineReducers} from 'redux'
import {productData} from '../redux/reducers/productReducers';

const rootReducer = combineReducers({
    productData
});

export default rootReducer;