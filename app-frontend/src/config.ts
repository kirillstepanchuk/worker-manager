import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://workermanager.herokuapp.com/'
})
