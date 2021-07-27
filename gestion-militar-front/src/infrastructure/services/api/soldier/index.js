import axios from "axios";

const soldierAxios = axios.get({
    baseURL: 'http://localhost:8080/militarapi/v1/militar'
});

export default soldierAxios;