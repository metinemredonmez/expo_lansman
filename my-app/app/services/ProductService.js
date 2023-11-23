// app/services/ProductService.js
import apiClient from '../api/ApiClient';
import { PRODUCT_ENDPOINT } from '../api/Endpoints';
import * as errorMessages from '../utils/errorMessages';

export const getProducts = async () => {
    try {
        const response = await apiClient.get(PRODUCT_ENDPOINT);
        return response.data;
    } catch (error) {
        console.error('Product fetch error:', error);

        // Hata durumuna göre uygun hata mesajını seç
        let errorMessage = errorMessages.UNKNOWN_ERROR;

        if (error.response && error.response.status === 404) {
            errorMessage = errorMessages.PRODUCT_NOT_FOUND;
        } else if (error.message === 'Network Error') {
            errorMessage = errorMessages.NETWORK_ERROR;
        } else if (error.response && error.response.data && error.response.data.message) {
            errorMessage = error.response.data.message;
        }

        throw new Error(errorMessage);
    }
};


