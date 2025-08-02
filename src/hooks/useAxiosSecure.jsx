// src/hooks/useAxiosSecure.jsx


import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth';

const axiosSecure = axios.create({
    baseURL: 'https://pet-adoupt-platfrom-serverr.vercel.app', // আপনার সার্ভার URL এখানে দিন
});

const useAxiosSecure = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    axiosSecure.interceptors.request.use(
        (config) => {
            const token = localStorage.getItem('access-token');
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    axiosSecure.interceptors.response.use(
        (response) => response,
        async (error) => {
            if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                await logout();
                navigate('/login');
            }
            return Promise.reject(error);
        }
    );

    return axiosSecure;
};

export default useAxiosSecure;