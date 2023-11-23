// app/redux/reducers/accountReducer.js
import * as types from '../actions/actionTypes';

const initialState = {
    user: null,
    isAuthenticated: false,
    loading: false,
    error: null,
    checkingTenant: false,
    isTenantAvailable: false,
    tenantCheckError: null,
};

const accountReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.REGISTER_REQUEST:
        case types.LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case types.REGISTER_SUCCESS:
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload,
                isAuthenticated: true,
                loading: false,
            };
        case types.REGISTER_FAILURE:
        case types.LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case types.LOGOUT:
            return {
                ...state,
                user: null,
                isAuthenticated: false,
            };
        // Yeni action tiplerini ekleyin
        case types.CHECK_TENANT_REQUEST:
            return {
                ...state,
                checkingTenant: true,
                isTenantAvailable: false,
                tenantCheckError: null,
            };
        case types.CHECK_TENANT_SUCCESS:
            return {
                ...state,
                checkingTenant: false,
                isTenantAvailable: true,
            };
        case types.CHECK_TENANT_FAILURE:
            return {
                ...state,
                checkingTenant: false,
                isTenantAvailable: false,
                tenantCheckError: action.payload,
            };
        default:
            return state;
    }
};

export default accountReducer;
