import axios from 'axios';

const clientAxios = axios.create({
    baseURL: 'http://localhost:8080/militarapi/v1'
});

export default clientAxios;