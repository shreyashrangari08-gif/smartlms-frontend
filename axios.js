import axios from 'axios';

const API = axios.create({
    baseURL: 'https://lms-backrnd.onrender.com', // Yeh aapka live Render URL hai
});

export default API;

