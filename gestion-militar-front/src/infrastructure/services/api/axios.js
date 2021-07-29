import axios from 'axios';

const EndPointAxios = axios.create({
    baseURL: 'https://gestion-militar.herokuapp.com/militarapi/v1'
});

export default EndPointAxios;