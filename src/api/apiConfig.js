import axios from "axios";

const API_BASE_URL = axios.create({
    baseURL: 'https://rem.dbwebb.se/api',
    // baseURL : 'https://cors-anywhere.herokuapp.com/https://rem.dbwebb.se/api',
    headers: {
        'Content-Type': 'application/json',
    }
});
export default API_BASE_URL;