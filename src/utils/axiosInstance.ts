import axios from 'axios';

const API_BASE_URL = 'https://ai-recommendation-system-blue.vercel.app/api';

const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
    withCredentials: true, // ✅ Ensures cookies are sent in every request
    headers: {
        'Content-Type': 'application/json',
    },
});

// ✅ Log response headers to check for `Set-Cookie`
axiosInstance.interceptors.response.use((response) => {
    console.log("Response Headers:", response.headers);
    return response;
});

export default axiosInstance;
