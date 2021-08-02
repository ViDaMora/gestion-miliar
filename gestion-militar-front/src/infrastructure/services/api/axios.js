import axios from 'axios';

const EndPointAxios = axios.create({
    baseURL: 'https://militar-api-gestion.herokuapp.com/militarapi/v1'
});

export default EndPointAxios;