// redux/reducers/index.js
import { combineReducers } from 'redux';
import productReducer from './productReducer';
import categoryReducer from './categoryReducer';
import accountReducer from "./accountReducer";

const rootReducer = combineReducers({
    products: productReducer,
    categories: categoryReducer,
    accounts: accountReducer
});

export default rootReducer;



