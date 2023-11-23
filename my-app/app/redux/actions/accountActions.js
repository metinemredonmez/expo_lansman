// app/redux/actions/accountActions.js
import * as types from './actionTypes';
import * as authService from '../../services/AccountService';

export const registerRequest = () => ({
    type: types.REGISTER_REQUEST,
});

export const registerSuccess = (user) => ({
    type: types.REGISTER_SUCCESS,
    payload: user,
});

export const registerFailure = (error) => ({
    type: types.REGISTER_FAILURE,
    payload: error,
});

export const register = (userData) => {
    return async (dispatch) => {
        dispatch(registerRequest());
        try {
            const user = await authService.registerUser(userData);
            dispatch(registerSuccess(user));
        } catch (error) {
            dispatch(registerFailure(error.message));
        }
    };
};

// Benzer şekilde login için actionları oluşturabilirsin.
