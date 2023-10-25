import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
const AxiosIntance = (contentType = 'application/json') => {
    const axiosInstance = axios.create({
<<<<<<< HEAD
        baseURL: 'http://192.168.1.96:3000/api/'
=======
        baseURL: 'http://192.168.102.23:3000/api/'
>>>>>>> parent of aa22b2a (Merge branch 'main' into bao)
    });
    axiosInstance.interceptors.request.use(
        async config => {
            const token = await AsyncStorage.getItem('token');
            config.headers = {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
                'Content-Type': contentType
            }
            return config;
        },
        err => Promise.reject(err)
    );
    axiosInstance.interceptors.response.use(
        res => res.data,
        err => Promise.reject(err)
    ); // callback
    return axiosInstance;
}

export default AxiosIntance;