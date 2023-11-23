// app/services/CategoryService.js
import apiClient from '../api/ApiClient';
import { CATEGORY_ENDPOINT } from '../api/Endpoints';
import * as errorMessages from '../utils/errorMessages';

export const getCategories = async () => {
    try {
        const response = await apiClient.get(CATEGORY_ENDPOINT);
        return response.data;
    } catch (error) {
        console.error('CategoryService Error:', error);

        if (error.isAxiosError) {
            // Axios hatası
            throw new Error(errorMessages.API_ERROR);
        } else if (error.message === 'Network Error') {
            // Ağ hatası
            throw new Error(errorMessages.NETWORK_ERROR);
        } else {
            // Bilinmeyen hata
            throw new Error(errorMessages.UNKNOWN_ERROR);
        }
    }
};
