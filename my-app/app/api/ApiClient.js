// api/ApiClient.js
// 22.11.2023

import axios from 'axios';
import { BASE_URL } from './Endpoints';
import * as errorMessages from '../utils/errorMessages';

const apiClient = axios.create({
    baseURL: BASE_URL,
    timeout: 10000, // Örnek: 10 saniye
    headers: {
        'Content-Type': 'application/json',
        // Diğer isteğe bağlı başlıkları ekleyebilirsiniz.
    },
});

// Axios interceptors kullanarak error handling
apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        if (axios.isCancel(error)) {
            // İsteği iptal etme durumu
            throw new Error('Request canceled');
        }

        if (error.response) {
            // Sunucu tarafından gelen bir hata
            const status = error.response.status;
            if (status === 404) {
                throw new Error(errorMessages.NOT_FOUND);
            } else if (status === 500) {
                throw new Error(errorMessages.INTERNAL_SERVER_ERROR);
            } else {
                throw new Error(errorMessages.API_ERROR);
            }
        } else if (error.request) {
            // İstek gönderilirken bir hata oluştu
            console.log(error)
            throw new Error(errorMessages.REQUEST_ERROR);

        } else {
            // Diğer hata durumları
            throw new Error(errorMessages.UNKNOWN_ERROR);
        }
    }
);

export default apiClient;


