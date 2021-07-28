import axios from 'axios';

const SoldierAxios = axios.create({
    baseURL: 'http://localhost:3000/militarapi/v1/'
});

export default SoldierAxios;