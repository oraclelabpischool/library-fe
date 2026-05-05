import axios from "axios";

const API = axios.create({
    baseURL: 'http://localhost:3001/service',
    timeout: 1000,
    headers: {
        'accept': 'Application/json'
    }
})

API.interceptors.request.use((config) => {
    const storage = localStorage.getItem("token_login");
    const token = JSON.parse(storage!);
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

API.interceptors.response.use(
    (response) => response,
    async (error) => {
        if (error.response?.status === 401) {
            window.location.href = "/"
            return Promise.reject(error);
        }

        return Promise.reject(error);
    }
)

export default API