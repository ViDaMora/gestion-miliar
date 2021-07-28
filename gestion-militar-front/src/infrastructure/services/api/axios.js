import axios from 'axios';

const SoldierAxios = axios.create({
    baseURL: 'http://localhost:8080/militarapi/v1/'
});

export default SoldierAxios;