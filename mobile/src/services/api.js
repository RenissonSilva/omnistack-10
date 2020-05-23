import axios from 'axios';

const api = axios.create({
  baseURL:'http://192.168.0.13:3333',//colocar ip q aparece no expo e porta do backend
});

export default api;