import axios from 'axios';
import Cookies from 'js-cookie';
import { TOKEN_NAME } from '../constants';

const TOKEN = Cookies.get(TOKEN_NAME);

const axiosInstance = axios.create({
  baseURL: 'http://localhost:4000/api',
  headers: {
    'Content-type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${TOKEN}`,
  },
});

export default axiosInstance;
