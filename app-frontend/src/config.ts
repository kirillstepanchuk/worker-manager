import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://workermanager.herokuapp.com/',
});

export default axiosInstance;
