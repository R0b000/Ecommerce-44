import axios from "axios";

const axiosConfig = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    timeout: 30000,
    timeoutErrorMessage: "Server timed out...",
    responseType: 'json',
    headers: {
        "Content-Type": "application/json"
    }
});

axiosConfig.interceptors.response.use(
    (response) => {
        return response.data
    },
    (error) => {
        throw {
            error: error?.response?.data || null,
            code: error.status
        }
    } 
)

axiosConfig.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("_at_44") || null;
        if(token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config;
    }
)

export default axiosConfig