import axios from "axios";
axios.defaults.baseURL = "http://localhost:8080/militarapi/v1";

const soldierAxios = axios.get("/militar");


export default soldierAxios;