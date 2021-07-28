import axios from 'axios';

const EndPointAxios = axios.create({
    baseURL: 'http://localhost:8080/militarapi/v1/'
});

export default EndPointAxios;