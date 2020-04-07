import axios from 'axios';


export const axiosInstance = axios.create({
	baseURL: 'http://localhost:8081'
});

axiosInstance.interceptors.response.use(response => {
	return response.data;
}, error => {
	if (error.response.status === 401) {
		window.location.href = '/login';
	}
	return Promise.reject(error);
});