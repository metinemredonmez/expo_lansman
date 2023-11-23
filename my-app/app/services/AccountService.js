// app/services/AuthService.js
import apiClient from '../api/ApiClient';
import * as types from '../redux/actions/actionTypes';
import store from "../redux/store/configureStore";


const dispatch = store.dispatch

export const registerUser = async (userData) => {
    try {
        dispatch({ type: types.REGISTER_REQUEST });

        const response = await apiClient.post('/api/services/app/Account/Register', userData);

        if (response.data.success) {
            dispatch({ type: types.REGISTER_SUCCESS, payload: response.data });
            console.log('Kullanıcı başarıyla kaydedildi.');
            return true;
        } else {
            dispatch({ type: types.REGISTER_FAILURE, payload: response.data.error });
            console.log('Kullanıcı kaydedilemedi:', response.data.error);
            return false;
        }
    } catch (error) {
        dispatch({ type: types.REGISTER_FAILURE, payload: error.message });
        console.error('Register API Error:', error.message);
        throw error;
    }
};

export const login = async (email, password, dispatch) => {
    try {
        dispatch({ type: types.LOGIN_REQUEST });

        const response = await apiClient.post('/api/services/app/Account/Login', {
            email: email,
            password: password,
        });

        if (response.data.success) {
            dispatch({ type: types.LOGIN_SUCCESS, payload: response.data });
            console.log('Başarıyla giriş yapıldı.');
            return true;
        } else {
            dispatch({ type: types.LOGIN_FAILURE, payload: response.data.error });
            console.log('Giriş başarısız:', response.data.error);
            return false;
        }
    } catch (error) {
        dispatch({ type: types.LOGIN_FAILURE, payload: error.message });
        console.error('Login API Error:', error.message);
        throw error;
    }
};


// {
//     "name": "string",
//     "surname": "string",
//     "userName": "string",
//     "emailAddress": "user@example.com",
//     "password": "string",
//     "captchaResponse": "string",
//     "isSeller": true
// }

export const isTenantAvailable = async (tenantName, dispatch) => {
    try {
        dispatch({ type: types.CHECK_TENANT_REQUEST });

        const response = await apiClient.post('/api/services/app/Account/IsTenantAvailable', {
            tenantName: tenantName,
        });

        if (response.data.success) {
            dispatch({ type: types.CHECK_TENANT_SUCCESS, payload: response.data });
            console.log('Kiracı kullanılabilir.');
            return true;
        } else {
            dispatch({ type: types.CHECK_TENANT_FAILURE, payload: response.data.error });
            console.log('Kiracı kullanılamaz.');
            return false;
        }
    } catch (error) {
        dispatch({ type: types.CHECK_TENANT_FAILURE, payload: error.message });
        console.error('IsTenantAvailable API Error:', error.message);
        throw error;
    }
};

export default apiClient;
