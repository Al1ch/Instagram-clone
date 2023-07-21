import axios, { AxiosRequestConfig } from 'axios';
import React from 'react';

const useApi = () => {
	const axiosConfig: AxiosRequestConfig = {
		baseURL: process.env.REACT_APP_API_URL,
	};
	const axiosInstance = axios.create(axiosConfig);
	return axiosInstance;
};

export default useApi;
