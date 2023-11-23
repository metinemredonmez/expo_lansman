// app/redux/actions/categoryActions.js
import * as types from './actionTypes';
import * as categoryService from '../../services/CategoryService';

export const fetchCategoriesRequest = () => ({
    type: types.FETCH_CATEGORIES_REQUEST,
});

export const fetchCategoriesSuccess = (categories) => ({
    type: types.FETCH_CATEGORIES_SUCCESS,
    payload: categories,
});

export const fetchCategoriesFailure = (error) => ({
    type: types.FETCH_CATEGORIES_FAILURE,
    payload: error,
});

export const fetchCategories = () => {
    return async (dispatch) => {
        dispatch(fetchCategoriesRequest());
        try {
            const categories = await categoryService.getCategories();
            dispatch(fetchCategoriesSuccess(categories));
        } catch (error) {
            dispatch(fetchCategoriesFailure(error.message));
        }
    };
};
