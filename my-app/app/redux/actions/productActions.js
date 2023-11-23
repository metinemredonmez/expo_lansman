// app/redux/actions/productActions.js
import * as types from './actionTypes';
import * as productService from '../../services/ProductService';

export const fetchProductsRequest = () => ({
    type: types.FETCH_PRODUCTS_REQUEST,
});

export const fetchProductsSuccess = (products) => ({
    type: types.FETCH_PRODUCTS_SUCCESS,
    payload: products,
});

export const fetchProductsFailure = (error) => ({
    type: types.FETCH_PRODUCTS_FAILURE,
    payload: error,
});

export const fetchProducts = () => {
    return async (dispatch) => {
        dispatch(fetchProductsRequest());
        try {
            const products = await productService.getProducts();
            dispatch(fetchProductsSuccess(products));
        } catch (error) {
            dispatch(fetchProductsFailure(error.message));
        }
    };
};

