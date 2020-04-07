import { axiosInstance } from './api.constants';


export const getContacts = () => {
	return axiosInstance.get('/contacts');
};